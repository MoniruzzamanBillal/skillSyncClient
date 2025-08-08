import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

type TStatsCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
};

const StatsCard = ({
  title,
  value,
  icon: Icon,
  description,
}: TStatsCardProps) => {
  return (
    <Card className=" bg-white shadow border border-gray-300 ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className=" font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-sm  text-gray-700 ">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
