"use client";

import { Entry } from "@/model/common";
import { updatedEntry } from "@/utils/api";
import { useCallback, useEffect, useState } from "react";

type Props = {
  entry: Entry | null;
};

const Editor = ({ entry }: Props) => {
  const [value, setValue] = useState(entry?.content);
  const [analysis, setAnalysis] = useState(entry?.analysis);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);

  const analysisArrObj = [
    { name: "Summary", value: analysis?.summary ?? "N/A" },
    { name: "Mood", value: analysis?.mood ?? "N/A" },
    { name: "Color", value: analysis?.color ?? "N/A" },
    { name: "Negative", value: analysis?.negative ? "True" : "False" },
    { name: "Sensitivity Score", value: analysis?.sentimentScore ?? 0 },
  ];

  /**
   * TODO: (add feature of saving with "Ctrl+s")
   * investigate the issue on why the value state is not
   * the latest reference when we are saving with Ctrl+s
   * and always refers to the DB value as set in value at line 12 using useState!
   */
  //   const handleCtrlSaveKeyPress = async (event: any) => {
  //     // Check if Ctrl (or Command on macOS) and 'S' are pressed
  //     if ((event.ctrlKey || event.metaKey) && event.key === "s") {
  //       event.preventDefault();
  //       await handleContentSave();
  //     }
  //   };

  const handleContentSave = useCallback(async () => {
    if (entry && value) {
      setSaving(true);
      const data = await updatedEntry(entry?.id, value);
      setAnalysis(data?.analysis);
      setSaving(false);
    } else {
      setError(true);
    }
  }, [entry, value]);

  //   useEffect(() => {
  //     document.addEventListener("keydown", handleCtrlSaveKeyPress);
  //     return () => {
  //       document.removeEventListener("keydown", handleCtrlSaveKeyPress);
  //     };
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="flex flex-col col-span-2">
        <textarea
          className="w-full h-[85%] bg-zinc-900/40 p-8 text-xl outline-none text-white/90 resize-none text-justify"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          className="w-full h-10 bg-green-300 text-black/70 font-bold rounded shadow-sm shadow-white  mt-10"
          onClick={handleContentSave}
        >
          Save Entry
        </button>
        {error && (
          <p className="text-white/70 font-bold">
            Something went wrong, please try again!
          </p>
        )}
        {saving && <p className="text-white/70 font-bold">Saving ...</p>}
      </div>

      <div className="bg-zinc-900/40 border-l border-white/10">
        <div className="p-6 text-white/80">
          <h2 className="text-xl font-bold text-green-300 flex items-center gap-2">
            <span>Analysis</span>
            <span
              className="w-4 h-4 rounded-full inline-block"
              style={{ backgroundColor: analysis?.color ?? "#FFF" }}
            ></span>
          </h2>
          <div className="flex flex-col mt-5 text-white/60">
            <ul>
              {analysisArrObj.map((item) => (
                <li className="flex items-center gap-2 mb-2" key={item.name}>
                  <span className="w-2 h-2 bg-green-300 rounded-full inline-block"></span>
                  <span>{item.name}:</span>
                  <span className="overflow-ellipsis">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
