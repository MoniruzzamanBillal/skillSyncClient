"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import useIsMobile from "@/hooks/use-mobile";
import { TInterview, TJobApplicationStatus } from "@/utils/global.types";
import {
  BriefcaseIcon,
  BuildingIcon,
  CalendarIcon,
  ClockIcon,
  LinkIcon,
  MapPinIcon,
  TagIcon,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

import { InterviewCard, InterviewForm } from "@/components/ui";
import Select from "react-select";

const statusOptions = [
  { value: "Saved", label: "Saved" },
  { value: "Applied", label: "Applied" },
  { value: "Interviewing", label: "Interviewing" },
  { value: "Offered", label: "Offered" },
  { value: "Rejected", label: "Rejected" },
];

// Mock data for demonstration
const mockApplication = {
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
  company: {
    id: "comp789",
    userId: "user456",
    name: "Google",
    website: "careers.google.com",
    industry: "Tech",
    location: "Remote",
    createdAt: "2025-07-15T09:00:00Z",
  },
};

const mockInterviews: TInterview[] = [
  {
    id: "int001",
    applicationId: "app123",
    roundName: "HR Screening",
    date: "2025-08-01",
    outcome: "Pass",
    notes: "Asked about relocation and availability.",
  },
  {
    id: "int002",
    applicationId: "app123",
    roundName: "Technical Interview - Coding",
    date: "2025-08-05",
    outcome: "Pending",
    notes: "Solved two LeetCode medium problems. Discussed project experience.",
  },
];

const ApplicationDetail = () => {
  const isMobile = useIsMobile();
  const { applicationId } = useParams();

  const [application, setApplication] = useState(mockApplication);
  const [interviews, setInterviews] = useState(mockInterviews);
  const [isAddInterviewOpen, setIsAddInterviewOpen] = useState(false);
  const [isUpdateInterviewOpen, setIsUpdateInterviewOpen] = useState(false);

  console.log("application id = ");

  console.log(applicationId);

  const ModalOrDrawer = isMobile ? Drawer : Dialog;
  const ModalOrDrawerTrigger = isMobile ? DrawerTrigger : DialogTrigger;
  const ModalOrDrawerContent = isMobile ? DrawerContent : DialogContent;
  const ModalOrDrawerHeader = isMobile ? DrawerHeader : DialogHeader;
  const ModalOrDrawerTitle = isMobile ? DrawerTitle : DialogTitle;

  //  ! for changing interview status
  const handleStatusChange = async (
    selectedOption: { value: string; label: string } | null
  ) => {
    if (selectedOption) {
      const newStatus = selectedOption?.value as TJobApplicationStatus;
      console.log(`Updating status for application`);

      setApplication((prev) => ({ ...prev, status: newStatus }));
    }
  };

  // ! for adding new interview
  const handleAddInterview = (newInterviewData) => {
    const newInterview = {
      id: `int${Date.now()}`,
      applicationId: applicationId as string,
      ...newInterviewData,
    };
    setInterviews((prev) => [...prev, newInterview]);
    setIsAddInterviewOpen(false);
  };

  if (!application) {
    return (
      <div className="mainContainer py-8 text-center">
        Application not found.
      </div>
    );
  }

  return (
    <section className="mainContainer  ">
      <div className="applicationDetailWrapper bg-gray-100/90 border border-gray-300 shadow rounded-md p-3">
        {/* Application Detail Section */}
        <section className="mb-8">
          <div className="headingSection mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="headingLeft">
              <h1 className="font-medium text-2xl md:text-3xl">
                {application.jobTitle}
              </h1>
              <p className="text-lg text-gray-700">
                {application.company?.name}
              </p>
            </div>
            <div className="rightSection btnSection flex flex-wrap justify-end items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="status-select"
                  className="sr-only sm:not-sr-only"
                >
                  Status:
                </Label>
                <Select
                  options={statusOptions}
                  value={statusOptions?.find(
                    (option) => option?.value === application?.status
                  )}
                  onChange={handleStatusChange}
                />
              </div>
              <ModalOrDrawer
                open={isAddInterviewOpen}
                onOpenChange={setIsAddInterviewOpen}
              >
                <ModalOrDrawerTrigger asChild>
                  <Button className="bg-prime50 hover:bg-prime100">
                    Add Interview
                  </Button>
                </ModalOrDrawerTrigger>
                <ModalOrDrawerContent
                  className={isMobile ? "h-[80vh]" : "max-w-md"}
                >
                  <ModalOrDrawerHeader>
                    <ModalOrDrawerTitle>Add New Interview</ModalOrDrawerTitle>
                  </ModalOrDrawerHeader>
                  <div className="p-4 overflow-auto">
                    <InterviewForm
                      applicationId={application.id}
                      onSaveInterview={handleAddInterview}
                      onClose={() => setIsAddInterviewOpen(false)}
                    />
                  </div>
                </ModalOrDrawerContent>
              </ModalOrDrawer>
            </div>
          </div>

          <div className="detailBody grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
            <p className="flex items-center gap-2">
              <BuildingIcon className="h-5 w-5 text-gray-600" />
              <span className="font-bold">Company:</span>{" "}
              {application.company?.name}
            </p>
            <p className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-gray-600" />
              <span className="font-bold">Location:</span>{" "}
              {application.jobLocation}
            </p>
            <p className="flex items-center gap-2">
              <BriefcaseIcon className="h-5 w-5 text-gray-600" />
              <span className="font-bold">Job Type:</span> {application.jobType}
            </p>
            <p className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-gray-600" />
              <span className="font-bold">Applied On:</span>{" "}
              {application.applicationDate}
            </p>
            {application.deadline && (
              <p className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-gray-600" />
                <span className="font-bold">Deadline:</span>{" "}
                {application.deadline}
              </p>
            )}
            <p className="flex items-center gap-2 col-span-1 md:col-span-2">
              <LinkIcon className="h-5 w-5 text-gray-600" />
              <span className="font-bold">Job Link:</span>{" "}
              <a
                href={application.jobLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline truncate"
              >
                {application.jobLink}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <TagIcon className="h-5 w-5 text-gray-600" />
              <span className="font-bold">Current Status:</span>{" "}
              {application.status}
            </p>
          </div>
        </section>

        {/* Interviews Section */}
        <section className="mt-8">
          <h2 className="font-medium text-xl md:text-2xl mb-4">
            Interview Timeline
          </h2>
          {interviews.length === 0 ? (
            <p className="text-gray-600">
              No interviews scheduled yet for this application.
            </p>
          ) : (
            <div className="space-y-6  ">
              {interviews?.map((interview) => (
                <InterviewCard
                  key={interview?.id}
                  interview={interview}
                  applicationId={applicationId as string}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default ApplicationDetail;
