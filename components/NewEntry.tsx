"use client";

import { createNewEntry } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NewEntry = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleOnClick = async () => {
    setLoading(true);
    const data = await createNewEntry();
    setLoading(false);
    if (data && data.id) {
      router.push(`/journal/${data.id}`);
    } else {
      console.error("error fetching data while creating new journal!");
    }
  };

  return (
    <div
      className="cursor-pointer flex flex-col items-center justify-center overflow-hidden rounded-lg bg-green-300 shadow-sm shadow-white"
      onClick={handleOnClick}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="text-xl text-black/70 font-bold">New Entry</span>
      </div>
      {loading && <p className="text-sm text-black/20 font-bold">Loading...</p>}
    </div>
  );
};

export default NewEntry;
