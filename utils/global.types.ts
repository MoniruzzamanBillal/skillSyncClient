export type TCompnay = {
  id: string;
  userId: string;
  name: string;
  website: string;
  industry: string;
  location: string;
  createdAt: string;
};

export type TJobApplicationStatus =
  | "Pending"
  | "Accepted"
  | "Rejected"
  | "Applied"
  | "Interviewing"
  | "Offered";

export type TJobApplication = {
  id: string;
  userId: string;
  companyId: string;
  jobTitle: string;
  jobType: string;
  jobLocation: string;
  jobLink: string;
  status: TJobApplicationStatus;
  applicationDate: string;
  deadline: string | null;
  createdAt: string;
};
