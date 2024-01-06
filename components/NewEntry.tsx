"use client";

import { createNewEntry } from "@/utils/api";

// import { newEntry } from "@/util/api";
// import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

const NewEntry = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const data = await createNewEntry();
    router.push(`/journal/${data.id}`);
  };

  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-green-300 shadow-sm shadow-white">
      <div
        className="px-4 py-5 sm:p-6 flex align-middle justify-center"
        onClick={handleOnClick}
      >
        <span className="text-xl text-black/70 font-bold">New Entry</span>
      </div>
    </div>
  );
};

export default NewEntry;
