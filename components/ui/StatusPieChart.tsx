"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TPieChartData } from "@/utils/global.types";

type TStatusPieChartProps = {
  data: TPieChartData[];
};

const COLORS = ["#02b8a6", "#009b94", "#FFBB28", "#FF8042", "#00C49F"];

const StatusPieChart = ({ data }: TStatusPieChartProps) => {
  const hasData = data && data.some((item) => item.value > 0);

  return (
    <Card className="h-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Application Status Overview</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] flex items-center justify-center">
        {hasData ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-center text-gray-600">
            No data yet. Start tracking your first job!
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatusPieChart;
