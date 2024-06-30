"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { dashboardLinks } from "./DashboardData";
import { IoMenu } from "react-icons/io5";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import { logoutUser } from "@/services/actions/logoutUser";

const DashboardDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleLogout = () => {
    logoutUser(router);
  };

  return (
    <>
      <div className="flex fixed top-0 left-0 h-screen w-full">
        <div className="hidden bg-gray-800 py-5 px-4 w-[300px] h-screen z-10 lg:flex flex-col">
          <h2 className="text-3xl mb-5 font-semibold text-center text-gray-100">
            Mehedi <span className="text-cyan-200">Hasan</span>
          </h2>
          <ul className="flex-1 w-full bg-gray-600 mt-1 rounded-sm py-5 px-3 flex flex-col gap-3">
            {dashboardLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  className={`${
                    pathname === item.route ? "bg-cyan-200" : "bg-gray-100"
                  } hover:bg-cyan-200 transition-all duration-300 ease-in-out rounded-sm text-gray-950 py-3 text-center text-base font-semibold`}
                  href={item.route}
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center px-4 bg-gray-800 h-[80px] w-full border-l-2 border-gray-600">
            <button
              onClick={openSidebar}
              className="lg:hidden text-3xl text-violet-200"
            >
              <IoMenu />
            </button>
            <p className="hidden lg:flex text-cyan-200 bg-gray-700 px-2 py-1 rounded-md font-semibold">
              mehedih20@gmail.com
            </p>
            <button
              onClick={handleLogout}
              className="py-2 hover:bg-cyan-900 transition-all ease-in-out duration-300 bg-cyan-700 font-bold px-5 rounded-full text-gray-200"
            >
              Logout
            </button>
          </div>
          <div className="bg-gray-50 flex-1">{children}</div>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-20 bg-gray-800 py-5 px-4 w-[300px] h-screen flex lg:hidden flex-col ${
          isSidebarOpen
            ? "translate-x-0 shadow-2xl shadow-cyan-500/30"
            : "-translate-x-full"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold text-center text-gray-100">
            Mehedi <span className="text-cyan-200">Hasan</span>
          </h2>
          <button
            onClick={closeSidebar}
            className="text-cyan-200 rotate-90 rounded-full"
          >
            <FaX />
          </button>
        </div>
        <ul className="flex-1 w-full bg-gray-600 mt-1 rounded-sm py-5 px-3 flex flex-col gap-3">
          {dashboardLinks.map((item, index) => {
            return (
              <Link
                key={index}
                onClick={closeSidebar}
                className={`${
                  pathname === item.route ? "bg-cyan-200" : "bg-gray-100"
                } hover:bg-cyan-200 transition-all duration-300 ease-in-out rounded-sm text-gray-950 py-3 text-center text-base font-semibold`}
                href={item.route}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DashboardDrawer;
