"use client";

import { Entry } from "@/model/common";
import { useState } from "react";

type Props = {
  entry: Entry | null;
};

const Editor = ({ entry }: Props) => {
  const [value, setValue] = useState(entry?.content);
  return (
    <div className="w-full h-full">
      <textarea
        className="bg-zinc-900/40 w-full h-full p-8 text-xl outline-none  text-white/90"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Editor;
