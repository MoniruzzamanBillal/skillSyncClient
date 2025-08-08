import SideBar from "@/components/modules/Dashboard/SideBar";
import { Wrapper } from "@/components/ui";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="DashboardLayoutContainer bg-gray-50  ">
      <Wrapper className="dashbaordWrapper min-h-screen mx-auto sm:flex py-4 px-2 gap-x-4 gap-y-6  ">
        {/* sidebar section  */}

        <div className="sideBarContainer mb-6 sm:mb-0  sm:w-64 ">
          <SideBar />
        </div>
        {/* sidebar section  */}

        {/* children section  */}
        <div className="contentSection w-full    ">{children}</div>
      </Wrapper>
    </div>
  );
};

export default DashboardLayout;
