import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-green-100 flex justify-center items-center text-black">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-7xl font-bold mb-20">My.Mo.Jo</h1>
        <h1 className="text-5xl font-bold mb-6">My Mood Journal.</h1>
        <p className="text-2xl text-black/80 mb-6">
          This is the best app for tracking your mood through out your life. All
          you have to do is be honest.
        </p>
        <div>
          <Link href="/journal">
            <button className="bg-green-400 px-4 py-2 rounded-lg text-xl text-black font-bold">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
