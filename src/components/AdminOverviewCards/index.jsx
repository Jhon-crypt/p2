import React from "react";
import { Text, Img, Heading, Button } from "./..";

export default function AdminOverviewCards({
  totalriders = "Total Customers",
  threehundred = "300",
  lightbulbOne,
  change,
  vsLastMonth,
  ...props
}) {
  return (
    <div {...props}>
      <Button className="mt-1.5 flex h-[50px] w-[50px] items-center justify-center rounded-[25px] bg-gray-50">
        <Img src="images/img_settings.svg" />
      </Button>
      <div className="mb-1 flex flex-col items-start gap-0.5">
        <Text size="s" as="p" className="!text-blue_gray-700">
          {totalriders}
        </Text>
        <div className="flex items-end">
          <Heading as="h1">{threehundred}</Heading>
          <div className="mb-0.5 flex items-center gap-1">
            {!!lightbulbOne ? <Img src={lightbulbOne} alt="lightbulb_one" className="h-[20px] w-[20px]" /> : null}
            {!!change ? (
              <Text size="s" as="p" className="text-center !font-inter !text-red-400">
                {change}
              </Text>
            ) : null}
          </div>
          {!!vsLastMonth ? (
            <Text size="s" as="p" className="mb-0.5 !text-blue_gray-700">
              {vsLastMonth}
            </Text>
          ) : null}
        </div>
      </div>
    </div>
  );
}
