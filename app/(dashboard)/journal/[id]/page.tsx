import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import Editor from "@/components/Editor";
import { Entry } from "@/model/common";

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

const getEntry = async (id: string): Promise<Entry | null> => {
  const user = await getUserFromClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId: user.id,
      id,
    },
    include: {
      analysis: true,
    },
  });

  return entry;
};

const JournalEditorPage = async ({ params }: Props) => {
  const entry = await getEntry(params.id);

  return (
    <div className="w-full h-full ">
      <Editor entry={entry} />
    </div>
  );
};

export default JournalEditorPage;
