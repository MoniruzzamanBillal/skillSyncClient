"use client";

import { StatsCard } from "@/components/ui";
import {
  TBarChartData,
  TDashboardStats,
  TInterview,
  TPieChartData,
} from "@/utils/global.types";

import {
  BriefcaseIcon,
  CalendarCheckIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "lucide-react";

// --- Mock Data for Demonstration ---
const mockStats: TDashboardStats = {
  totalApplications: 5,
  interviewsScheduled: 2,
  offersReceived: 1,
  rejectedApplications: 1,
};

const mockPieChartData: TPieChartData[] = [
  { name: "Applied", value: 2 },
  { name: "Interviewing", value: 1 },
  { name: "Offered", value: 1 },
  { name: "Rejected", value: 1 },
  { name: "Applied", value: 0 },
];

const mockBarChartData: TBarChartData[] = [
  { month: "Jan", applications: 0 },
  { month: "Feb", applications: 0 },
  { month: "Mar", applications: 0 },
  { month: "Apr", applications: 1 },
  { month: "May", applications: 1 },
  { month: "Jun", applications: 1 },
  { month: "Jul", applications: 2 },
  { month: "Aug", applications: 0 },
  { month: "Sep", applications: 0 },
  { month: "Oct", applications: 0 },
  { month: "Nov", applications: 0 },
  { month: "Dec", applications: 0 },
];

const mockUpcomingInterviews: TInterview[] = [
  {
    id: "int003",
    applicationId: "app124",
    roundName: "Google - Final Round",
    date: "2025-08-10",
    outcome: "Pending",
    notes: "Prepare for system design questions.",
  },
  {
    id: "int004",
    applicationId: "app125",
    roundName: "Microsoft - Technical Screen",
    date: "2025-08-15",
    outcome: "Pending",
    notes: "Review data structures and algorithms.",
  },
];

const DashboardHomePage = () => {
  return (
    <div className="dashboardPageContainer">
      <div className="dashboardWrapper bg-gray-100/90 border border-gray-300  shadow rounded-md p-3 ">
        <h1 className="font-bold text-3xl md:text-4xl mb-8 text-center">
          Your Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatsCard
            title="Total Applications"
            value={mockStats?.totalApplications}
            icon={BriefcaseIcon}
            description="Applications tracked so far"
          />
          <StatsCard
            title="Interviews Scheduled"
            value={mockStats?.interviewsScheduled}
            icon={CalendarCheckIcon}
            description="Upcoming and past interviews"
          />
          <StatsCard
            title="Offers Received"
            value={mockStats?.offersReceived}
            icon={CheckCircleIcon}
            description="Congratulations!"
          />
          <StatsCard
            title="Rejected Applications"
            value={mockStats?.rejectedApplications}
            icon={XCircleIcon}
            description="Keep pushing!"
          />
        </div>

        <h1>dashboard page </h1>
        <h1>dashboard page </h1>
        <h1>dashboard page </h1>
        <h1>dashboard page </h1>
        <h1>dashboard page </h1>
      </div>
    </div>
  );
};

export default DashboardHomePage;
