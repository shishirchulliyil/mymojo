import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ReactNode } from "react";

const links = [
  { name: "Journals", href: "/journal" },
  { name: "History", href: "/history" },
];

type Prop = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Prop) => {
  return (
    <div className="w-screen h-screen relative bg-zinc-900/90">
      <aside className="absolute left-0 top-0 h-full w-[200px] bg-zinc-900 text-white">
        <div className="px-4 mt-4 mb-8">
          <span className="text-3xl text-green-300 underline font-bold">
            MyMoJo
          </span>
        </div>
        <div>
          <ul className="px-4">
            {links.map((link) => (
              <li key={link.name} className="text-xl my-4">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="ml-[200px] h-full w-[calc(100vw-200px)]">
        <header className="h-[60px]">
          <nav className="px-4 h-full">
            <div className="flex items-center justify-end h-full">
              <UserButton afterSignOutUrl="/" />
            </div>
          </nav>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
