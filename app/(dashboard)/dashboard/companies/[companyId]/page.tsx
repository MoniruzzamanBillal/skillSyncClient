"use client";

import { NavigateButton } from "@/components/shared";
import { useParams } from "next/navigation";

const CompanyDetail = () => {
  const { companyId } = useParams();

  console.log("company id =  " + companyId);

  return (
    <section className="mainContainer">
      <div className="companyDetailWrapper bg-gray-100/90 border border-gray-300  shadow rounded-md p-3 ">
        {/* company detail section  */}
        <section>
          {/* heading section  */}
          <div className="headingSection mb-8 flex justify-between items-center">
            <div className="headingLeft">
              <h1 className=" font-medium text-2xl  ">Company Name</h1>
            </div>

            <div className=" rightSection btnSection flex justify-between items-center gap-x-4  ">
              <NavigateButton
                label="Add Application"
                route="/dashboard/applications/addApplication"
              />
            </div>

            {/*  */}
          </div>

          <div className="detailBody">
            <p className="websiteName text-lg ">
              <span className=" font-bold ">Website : </span> company website
            </p>

            <p className="industryName">
              <span className=" font-bold ">Industry : </span> Industry name
            </p>

            <p className="companyLocation ">
              <span className=" font-bold "> Location : </span> company location
            </p>
          </div>
        </section>
        {/* company detail section  */}
      </div>
    </section>
  );
};

export default CompanyDetail;
