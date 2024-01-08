import HistoryChart from "@/components/HistoryChart";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getData = async () => {
  const user = await getUserFromClerkID();
  const analysisData = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      updatedAt: "asc",
    },
  });

  const sum = analysisData.reduce(
    (all, currentAnalysis) => all + currentAnalysis.sentimentScore,
    0
  );
  const avg = Math.round(sum / analysisData.length);
  return { analysisData, avg };
};

const History = async () => {
  const { analysisData, avg } = await getData();
  return <HistoryChart data={analysisData} />;
};

export default History;
