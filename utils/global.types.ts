export type JobType = "Remote" | "Onsite" | "Hybrid";
export type InterviewOutcome = "Pass" | "Fail" | "Pending";
export type TJobApplicationStatus =
  | "Pending"
  | "Accepted"
  | "Rejected"
  | "Applied"
  | "Interviewing"
  | "Offered";

export type TCompnay = {
  id: string;
  userId: string;
  name: string;
  website: string;
  industry: string;
  location: string;
  createdAt: string;
};

export type TJobApplication = {
  id: string;
  userId: string;
  companyId: string;
  jobTitle: string;
  jobType: JobType;
  jobLocation: string;
  jobLink: string;
  status: TJobApplicationStatus;
  applicationDate: string;
  deadline: string | null;
  createdAt: string;
};

export type TInterview = {
  id: string;
  applicationId: string;
  roundName: string;
  date: string;
  outcome: InterviewOutcome;
  notes: string;
};

export type TDashboardStats = {
  totalApplications: number;
  interviewsScheduled: number;
  offersReceived: number;
  rejectedApplications: number;
};

export type TPieChartData = {
  name: TJobApplicationStatus;
  value: number;
};

export type TBarChartData = {
  month: string;
  applications: number;
};
