"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiLogin } from "react-icons/ci";
import { LuUser } from "react-icons/lu";

type TUserDashboard = {
  label: string;
  link: string;
};

const userDashboardLinks: TUserDashboard[] = [
  {
    label: "Company",
    link: "/dashboard/companies",
  },
  {
    label: "Applications",
    link: "/dashboard/applications",
  },
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
                className={` flex items-center gap-x-1  my-4 text-lg font-medium hover:text-prime100  ${
                  pathname === navItem?.link ? "active" : ""
                } `}
              >
                {navItem?.label}{" "}
              </Link>
            ))}
        </div>

        <div className="  mt-6 flex items-center gap-x-1  cursor-pointer font-medium p-1 border border-gray-300  ">
          <CiLogin className=" text-xl  " />
          Logout
        </div>
      </nav>
      {/* dashboard links ends  */}
    </div>
  );
};

export default SibeBar;
