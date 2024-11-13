import {
  ArrowDownIcon,
  ArrowUpIcon,
  EyeOpenIcon,
  MinusIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";

interface CardProps {
  data: {
    title: string;
    value: number;
    percent: number;
    sign?: string;
    change: string;
  };
}

const Card = ({ data }: CardProps) => {
  const cardIcon = (icon: string) => {
    switch (icon) {
      case "view":
        return <EyeOpenIcon width={35} height={35} />;
      case "profit":
        return <ShoppingCart width={30} height={30} />;
      case "users":
        return <PersonIcon width={35} height={35} />;
    }
  };

  const changeIcon = (change: string) => {
    switch (change) {
      case "increase":
        return <ArrowUpIcon />;
      case "decrease":
        return <ArrowDownIcon />;
      case "neutral":
        return <MinusIcon />;
    }
  };

  return (
    <div className="w-full h-[150px] flex flex-col">
      <div className="flex-1 flex items-center">
        <div className="rounded-full bg-surface-primary p-3">
          {cardIcon(data.title)}
        </div>
      </div>
      <div className="px-2">
        <h2 className="font-bold">{(data.sign || "") + data.value}</h2>
        <div className="flex justify-between">
          <p className="capitalize opacity-60">Total {data.title}</p>
          <p
            className={clsx("flex items-center", {
              "text-green-400": data.change === "increase",
              "text-red-500": data.change === "decrease",
              "text-yellow-500": data.change === "neutral",
            })}
          >
            {data.percent}%
            <span className="mx-1">{changeIcon(data.change)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
