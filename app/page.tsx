import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? "/journal" : "/new-user";

  return (
    <div className="w-screen h-screen bg-black/90 flex p-10 justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-7xl font-bold mb-20 underline text-green-300">
          My.Mo.Jo
        </h1>
        <h1 className="text-5xl font-bold mb-6">My Mood Journal.</h1>
        <p className="text-2xl text-white/30 mb-6">
          This is the best app for tracking your mood through out your life. All
          you have to do is be honest.
        </p>
        <div>
          <Link href={href}>
            <button className="bg-green-300 px-4 py-2 rounded-lg text-xl text-black/80 font-bold">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
