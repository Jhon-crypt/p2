import React from "react";
import { Text, Img, Heading, Button } from "./..";

export default function AdminOverviewCards1({
  totalriders = "Total Riders",
  threehundred = "300",
  change = "20%",
  vsLastMonth = "vs last month",
  ...props
}) {
  return (
    <div {...props}>
      <Button className="mt-1.5 flex h-[50px] w-[50px] items-center justify-center rounded-[25px] bg-gray-50">
        <Img src="images/img_component_1.svg" />
      </Button>
      <div className="mb-1 flex flex-col items-start gap-0.5">
        <Text size="s" as="p" className="!text-blue_gray-700">
          {totalriders}
        </Text>
        <div className="flex items-end">
          <Heading as="h1">{threehundred}</Heading>
          <div className="mb-0.5 flex items-center gap-1">
            <Img src="images/img_arrow_up.svg" alt="arrowup_one" className="h-[20px] w-[20px]" />
            <Text size="s" as="p" className="text-center !font-inter !text-green-600">
              {change}
            </Text>
          </div>
          <Text size="s" as="p" className="mb-0.5 !text-blue_gray-700">
            {vsLastMonth}
          </Text>
        </div>
      </div>
    </div>
  );
}
