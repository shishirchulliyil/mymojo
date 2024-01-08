import { analyze } from "@/utils/ai";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

type Props = {
  params: {
    id: string;
  };
};

export const PATCH = async (request: Request, { params }: Props) => {
  const { content } = await request.json();
  const user = await getUserFromClerkID();
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId: user.id,
      id: params.id,
    },
    data: {
      content,
    },
  });

  const analysis = await analyze(updatedEntry.content);

  const updatedAnalysis = await prisma.analysis.upsert({
    where: {
      entryId: updatedEntry.id,
    },
    update: analysis,
    create: {
      userId: user.id,
      entryId: updatedEntry.id,
      ...analysis,
    },
  });

  return NextResponse.json({
    data: { ...updatedEntry, analysis: updatedAnalysis },
  });
};
