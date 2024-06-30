"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardLinks } from "./DashboardData";

const DashboardDrawer = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex fixed top-0 left-0 h-screen w-full">
      <div className="bg-violet-900 py-5 px-4 w-[300px] h-screen z-10 flex flex-col">
        <h2 className="text-3xl mb-5 font-semibold text-center text-gray-100">
          Mehedi <span className="text-orange-300">Hasan</span>
        </h2>
        <ul className="flex-1 w-full bg-violet-700 mt-1 rounded-sm py-5 px-3 flex flex-col gap-3">
          {dashboardLinks.map((item, index) => {
            return (
              <Link
                key={index}
                className={`${
                  pathname === item.route ? "bg-violet-50" : "bg-violet-400"
                } hover:bg-violet-50 transition-all duration-300 ease-in-out rounded-sm text-violet-950 py-3 text-center text-base font-semibold`}
                href={item.route}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center px-4 bg-violet-900 h-[80px] w-full border-l-2 border-violet-800">
          <p className="text-violet-200 bg-violet-800 px-2 py-1 rounded-md font-semibold">
            mehedih20@gmail.com
          </p>
          <button className="py-2 hover:bg-purple-600 transition-all ease-in-out duration-300 bg-violet-600 font-bold px-5 rounded-full text-gray-200">
            Logout
          </button>
        </div>
        <div className="bg-gray-50 flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardDrawer;
