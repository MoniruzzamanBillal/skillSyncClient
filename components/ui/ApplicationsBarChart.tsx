"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TBarChartData } from "@/utils/global.types";

type TApplicationsBarChartProps = {
  data: TBarChartData[];
};

const ApplicationsBarChart = ({ data }: TApplicationsBarChartProps) => {
  const hasData = data && data.some((item) => item.applications > 0);

  return (
    <Card className="h-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Applications Over Time</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] flex items-center justify-center">
        {hasData ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="applications" fill="#009b94" name="Applications" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-center text-gray-600">
            No application history yet.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ApplicationsBarChart;
