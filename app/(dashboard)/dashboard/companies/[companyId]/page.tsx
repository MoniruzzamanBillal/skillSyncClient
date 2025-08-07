"use client";

import { NavigateButton } from "@/components/shared";
import { TCompnay, TJobApplication } from "@/utils/global.types";
import { BuildingIcon, GlobeIcon, MapPinIcon, TagIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const mockCompany: TCompnay = {
  id: "comp789",
  userId: "user456",
  name: "Google",
  website: "careers.google.com",
  industry: "Tech",
  location: "Remote",
  createdAt: "2025-07-15T09:00:00Z",
};

const mockApplicationsForCompany: TJobApplication[] = [
  {
    id: "app123",
    userId: "user456",
    companyId: "comp789",
    jobTitle: "Software Engineering Intern",
    jobLocation: "Remote",
    jobType: "Remote",
    jobLink: "https://careers.google.com/jobs/abc123",
    applicationDate: "2025-07-25",
    status: "Applied",
    deadline: "2025-09-01",
    createdAt: "2025-07-20T10:00:00Z",
  },
  {
    id: "app124",
    userId: "user456",
    companyId: "comp789",
    jobTitle: "Product Manager Intern",
    jobLocation: "Mountain View, CA",
    jobType: "Onsite",
    jobLink: "https://careers.google.com/jobs/def456",
    applicationDate: "2025-07-20",
    status: "Interviewing",
    deadline: "2025-08-30",
    createdAt: "2025-07-18T11:00:00Z",
  },
];

const CompanyDetail = () => {
  const { companyId } = useParams();

  console.log("company id =  " + companyId);

  const company = mockCompany;
  const applications = mockApplicationsForCompany;

  if (!company) {
    return (
      <section className="mainContainer py-8 text-center">
        Loading company details... or Company not found.
      </section>
    );
  }

  return (
    <section className="mainContainer py-8 ">
      <div className="companyDetailWrapper bg-gray-100/90 border border-gray-300 shadow rounded-md p-3  ">
        {/* company detail section  */}

        <section className="mb-8">
          {/* heading section */}
          <div className="headingSection mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="headingLeft">
              <h1 className="font-medium text-2xl md:text-3xl">
                {company.name}
              </h1>
            </div>
            <div className="rightSection btnSection flex flex-wrap justify-end items-center gap-x-4 gap-y-2">
              <NavigateButton
                label="Add Application"
                route="/dashboard/applications/addApplication"
              />
            </div>
          </div>
          <div className="detailBody grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
            <p className="flex items-center gap-2">
              <GlobeIcon className="h-5 w-5 text-gray-600" />
              <span className="font-bold">Website:</span>{" "}
              <a
                href={`https://${company.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline truncate"
              >
                {company.website}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <BuildingIcon className="h-5 w-5 text-gray-600" />
              <span className="font-bold">Industry:</span> {company.industry}
            </p>
            <p className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-gray-600" />
              <span className="font-bold">Location:</span> {company.location}
            </p>
          </div>
        </section>
        {/* company detail section  */}

        {/* Applications for this Company Section */}
        <section className="mt-8">
          <h2 className="font-medium text-xl md:text-2xl mb-4">
            Applications for {company.name}
          </h2>
          {applications.length === 0 ? (
            <p className="text-gray-600">
              No applications tracked for this company yet.
            </p>
          ) : (
            <div className="space-y-4">
              {applications.map((app) => (
                <Link
                  key={app.id}
                  href={`/dashboard/applications/${app.id}`}
                  className="block"
                >
                  <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-100 my-4 ">
                    <h3 className="font-semibold text-lg mb-1">
                      {app.jobTitle}
                    </h3>
                    <p className="text-gray-700 flex items-center gap-2 mb-1">
                      <MapPinIcon className="h-4 w-4 text-gray-500" />{" "}
                      {app.jobLocation} ({app.jobType})
                    </p>
                    <p className="text-gray-700 flex items-center gap-2">
                      <TagIcon className="h-4 w-4 text-gray-500" /> Status:{" "}
                      <span className="font-medium text-prime100">
                        {app.status}
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
        {/* Applications for this Company Section */}
      </div>
    </section>
  );
};

export default CompanyDetail;
