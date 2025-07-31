import { TJobApplicationStatus } from "./global.types";

export const JobApplicationStatusConst: {
  [key in TJobApplicationStatus]: string;
} = {
  Pending: "pending",
  Accepted: "accepted",
  Rejected: "rejected",
  Applied: "applied",
  Interviewing: "interviewing",
  Offered: "offered",
};
