"use client";
import {
  AnalyticStats,
  CCuse,
  RecentActivities,
  WalletBalance,
} from "@components";
import { User } from "@constants";
import { useState } from "react";

const Analytics = () => {
  let balance = 0;
  for (let i = 0; i < User[0].cards.length; i++) {
    balance = balance + User[0].cards[i].balance;
  }

  let arr = [
    {
      title: "Deposit",
      icon: "mdi-arrow-bottom-left",
    },
    {
      title: "Transfer",
      icon: "mdi-cash-usd",
    },
    {
      title: "Spending",
      icon: "mdi-arrow-top-right",
    },
  ];
  const [duration, setDuration] = useState("Weekly");
 
  return (
    <div className="">
      <div className="flex flex-col justify-center padding-y">
        <span className="h-full font-extralight text-[12px]">
          Optimize performances
        </span>
        <p className="h-full text-lg font-thin">
          Analytics{" "}
          <span className="font-extralight text-[12px]">mid-year (2022)</span>
        </p>
        <div className="w-full h-10 p-1 my-5 flex bg-white text-black rounded-full">
          <span
            className={`${
              duration === "Weekly" ? "bg-black text-white" : null
            } w-1/2 h-full flex justify-center items-center rounded-full `}
            onClick={() => setDuration("Weekly")}>
            Weekly
          </span>{" "}
          <span
            className={`${
              duration === "Monthly" ? "bg-black text-white" : null
            } w-1/2 h-full flex justify-center items-center rounded-full`}
            onClick={() => setDuration("Monthly")}>
            Monthly
          </span>
        </div>
        <p className="h-full flex flex-col text-lg font-thin">
          <span className="font-extralight text-[12px]">Total Amount</span>{" "}
          <span className="text-lg font-thin">${balance}.00</span>
        </p>
      </div>

      <div>
        <div className="flex flex-col font-extralight text-[12px]">
          <span className="flex items-center">
            <p className="rounded-full w-2 h-2 mr-2 bg-slate-200" />
            income
          </span>
          <span className="flex items-center">
            <p className="rounded-full w-2 h-2 mr-2 bg-slate-500" />
            outcome
          </span>
        </div>
        {duration === "Weekly" ? (
          <div className="scroll__hide flex justify-between items-center overflow-x-auto">
            {" "}
            <AnalyticStats
              spent={"h-[20%]"}
              saved={"h-[30%]"}
              week={"1st week"}
            />
            <AnalyticStats
              spent={"h-[50%]"}
              saved={"h-[20%]"}
              week={"2nd week"}
            />
            <AnalyticStats
              spent={"h-[45%]"}
              saved={"h-[70%]"}
              week={"3rd week"}
            />
            <AnalyticStats
              spent={"h-[40%]"}
              saved={"h-[30%]"}
              week={"4th week"}
            />
            <AnalyticStats spent={"h-[22%]"} saved={"h-[10%]"} week={"5th"} />{" "}
          </div>
        ) : (
          <div className="scroll__hide flex justify-between items-center overflow-x-auto">
            <AnalyticStats
              spent={"h-[40%]"}
              saved={"h-[60%]"}
              week={"1st month"}
            />
            <AnalyticStats
              spent={"h-[35%]"}
              saved={"h-[25%]"}
              week={"2nd month"}
            />
            <AnalyticStats
              spent={"h-[50%]"}
              saved={"h-[30%]"}
              week={"3rd month"}
            />
            <AnalyticStats
              spent={"h-[62%]"}
              saved={"h-[10%]"}
              week={"4th month"}
            />
            <AnalyticStats
              spent={"h-[52%]"}
              saved={"h-[30%]"}
              week={"5th month"}
            />
            <AnalyticStats
              spent={"h-[45%]"}
              saved={"h-[10%]"}
              week={"6th month"}
            />
          </div>
        )}
      </div>

      <RecentActivities />
    </div>
  );
};

export default Analytics;
