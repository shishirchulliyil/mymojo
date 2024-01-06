import { Entry } from "@/model/common";

type Props = {
  entry: any;
};

const EntryCard = ({ entry }: Props) => {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow shadow-white">
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">
        {entry?.analysis?.summary ?? "summary"}
      </div>
      <div className="px-4 py-4 sm:px-6">{entry?.analysis?.mood ?? "mood"}</div>
    </div>
  );
};

export default EntryCard;
