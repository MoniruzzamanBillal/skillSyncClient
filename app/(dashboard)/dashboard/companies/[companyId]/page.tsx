"use client";

import { useParams } from "next/navigation";

const CompanyDetail = () => {
  const { companyId } = useParams();

  console.log("company id =  " + companyId);

  return (
    <div className="mainContainer">
      <div className="companyDetailWrapper bg-gray-100/90 border border-gray-300  shadow rounded-md p-3 ">
        <h1>company detail </h1>
        <h1>company detail </h1>
        <h1>company detail </h1>
        <h1>company detail </h1>
      </div>
    </div>
  );
};

export default CompanyDetail;
