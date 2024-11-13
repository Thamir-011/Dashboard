"use client";

import Card from "@/components/dashboard/Card";
import TotalProfit from "@/components/dashboard/charts/TotalProfit";
import WeekProfit from "@/components/dashboard/charts/WeekProfit";
import { mainPage } from "@/data/constants";
import { useTheme } from "next-themes";

const page = () => {
  const { theme, resolvedTheme } = useTheme();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 child:bg-surface-secondary child:rounded-sm child:shadow-md">
        {/* <div className="flex w-full justify-between gap-5"> */}
        {mainPage.cards.map((card) => (
          <div key={card.title} className="p-5">
            <Card data={card} />
          </div>
        ))}
        <WeekProfit />
        <TotalProfit />
      </div>
    </div>
  );
};

export default page;
