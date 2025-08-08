"use client";

import { format } from "date-fns";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ApplicationsBarChart,
  StatsCard,
  StatusPieChart,
} from "@/components/ui";
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
import Link from "next/link";

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

type TInterviewWithCompany = TInterview & {
  companyName: string;
};
const mockUpcomingInterviews: TInterviewWithCompany[] = [
  {
    id: "int003",
    applicationId: "app124",
    roundName: " Final Round",
    date: "2025-08-10",
    outcome: "Pending",
    notes: "Prepare for system design questions.",
    companyName: "Google",
  },
  {
    id: "int004",
    applicationId: "app125",
    roundName: " Technical Screen",
    date: "2025-08-15",
    outcome: "Pending",
    notes: "Review data structures and algorithms.",
    companyName: "Microsoft",
  },
];

const DashboardHomePage = () => {
  return (
    <div className="dashboardPageContainer">
      <div className="dashboardWrapper bg-gray-100/90 border border-gray-300  shadow rounded-md p-3 ">
        <h1 className="font-bold text-3xl  mb-8 text-center">Statistics</h1>

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

        {/* Charts Section */}
        <div className="grid gap-4 lg:grid-cols-2 mb-8">
          <StatusPieChart data={mockPieChartData} />
          <ApplicationsBarChart data={mockBarChartData} />
        </div>

        {/* Upcoming Interviews Section */}
        <Card className="bg-gray-50 border border-gray-300 shadow rounded-md p-3">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">
              Upcoming Interviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            {mockUpcomingInterviews.length === 0 ? (
              <p className="text-gray-600">
                No upcoming interviews. Keep applying!
              </p>
            ) : (
              <div className="space-y-4">
                {mockUpcomingInterviews.map((interview) => (
                  <Link
                    key={interview.id}
                    href={`/dashboard/applications/${interview.applicationId}`}
                    className="block"
                  >
                    <div className="bg-gray-100/90 my-4 border border-gray-400 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <h3 className="font-semibold text-lg mb-1">
                        {interview?.companyName &&
                          `${interview?.companyName} - `}{" "}
                        {interview.roundName}
                      </h3>
                      <p className="text-gray-900 flex items-center gap-2">
                        <CalendarCheckIcon className="h-4 w-4 text-gray-500" />
                        <span className="font-semibold">Date:</span>{" "}
                        {format(new Date(interview.date), "dd-MMM-yyy")}
                      </p>
                      {interview.notes && (
                        <p className="text-sm text-gray-800 mt-1 truncate">
                          Notes: {interview.notes}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHomePage;
