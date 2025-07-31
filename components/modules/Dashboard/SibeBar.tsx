"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { MdBusiness } from "react-icons/md";

type TUserDashboard = {
  label: string;
  link: string;
  icon: ReactNode;
};

const userDashboardLinks: TUserDashboard[] = [
  {
    label: "Home",
    link: "/dashboard",
    icon: <AiOutlineHome className="text-xl font-bold" />,
  },
  {
    label: "Company",
    link: "/dashboard/companies",
    icon: <MdBusiness className="text-xl font-bold" />,
  },
  {
    label: "Applications",
    link: "/dashboard/applications",
    icon: <FaWpforms className="text-xl font-bold" />,
  },
  // {
  //   label: "Interviws",
  //   link: "/dashboard/interviews",
  //   icon: <BsCalendarEvent className="text-xl font-bold" />,
  // },
];

const SibeBar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="bg-gray-100 border border-gray-300 rounded-md p-4 sticky top-[0.2rem] shadow-md  ">
      <div className="flex items-center space-x-2 border-b-4 border-prime50 pb-2 print:hidden">
        <div className=" p-2 rounded-full bg-slate-200 cursor-pointe   ">
          <LuUser className=" text-2xl font-bold text-gray-800 " />
        </div>

        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      {/* dashboard links starts  */}
      <nav className="dashboardNavLinks mt-4">
        <div className="dashboardLinks">
          {userDashboardLinks &&
            userDashboardLinks?.map((navItem: TUserDashboard, ind: number) => (
              <Link
                key={ind}
                href={navItem?.link}
                className={`    text-lg font-medium hover:text-prime100  ${
                  pathname === navItem?.link ? "active" : ""
                } `}
              >
                <div className="linksContainer flex items-center gap-x-2  my-6  hover:text-prime100 ">
                  {navItem.icon}
                  <p>{navItem.label}</p>
                </div>
              </Link>
            ))}
        </div>

        <div className="  mt-6 flex items-center gap-x-1  cursor-pointer font-medium p-2 border border-gray-400   ">
          <FiLogOut className="text-xl" />
          Logout
        </div>
      </nav>
      {/* dashboard links ends  */}
    </div>
  );
};

export default SibeBar;
