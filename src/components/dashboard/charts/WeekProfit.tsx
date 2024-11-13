"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState } from "react";
import { weekProfit } from "@/data/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const WeekProfit = () => {
  const [chartData, setChartData] = useState(weekProfit.thisWeek);

  const weekChange = (e: string) => {
    if (e === "prevWeek") {
      setChartData(weekProfit.prevWeek);
      console.log("prev");
    } else {
      setChartData(weekProfit.thisWeek);
    }
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Weekly Profit</CardTitle>
        <CardDescription>
          <Select
            defaultValue="currentWeek"
            onValueChange={weekChange}
            name="week"
          >
            <SelectTrigger className="w-full bg-surface-primary">
              <SelectValue placeholder="Choose a Week" />
            </SelectTrigger>
            <SelectContent className="bg-surface-primary">
              <SelectItem value="currentWeek">Current Week</SelectItem>
              <SelectItem value="prevWeek">Previous Week</SelectItem>
            </SelectContent>
          </Select>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-2 md:p-5">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 1)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  className="bg-black text-white"
                />
              }
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="sales"
              stackId="a"
              fill="var(--color-sales)"
              radius={[0, 0, 4, 4]}
              barSize={1000}
            />
            <Bar
              dataKey="revenue"
              stackId="a"
              fill="var(--color-revenue)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default WeekProfit;
