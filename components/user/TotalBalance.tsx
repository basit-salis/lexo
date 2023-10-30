"use client";
import React, { useState } from "react";
import { User } from "@/constants";

const TotalBalance = () => {
  const [hide, setHide] = useState(true);
  let balance = 0;
  for (let i = 0; i < User[0].cards.length; i++) {
    balance = balance + User[0].cards[i].balance;
  }

  return (
    <div className="h-20 flex flex-col justify-center leading-tight text-white padding-y">
      <div className="flex justify-between">
        <span className="h-full py-1 text-[12px] font-light">
          Total Balance <br />
          <p className="py-1 font-bold text-3xl transition-all duration-200">
            {hide ? "****" : `$${balance}.00`}
          </p>
        </span>
        <span
          className="text-[12px] w-24 h-9 cursor-pointer transition-all duration-200 rounded-full font-extralight border border-slate-400 flex justify-around items-center relative before:absolute before:rounded-full before:right-0 before:bottom-0 before:left-0 before:top-0 before:bg-slate-50 before:opacity-10 before:-z-10 before:content['']"
          onClick={() => {
            setHide((prev) => !prev);
          }}>
          <p>{hide ? "Show" : "Hide"}</p>{" "}
          <i
            className={`mdi ${
              hide ? "mdi-eye-outline " : "mdi-eye-off-outline"
            } text-lg`}></i>
        </span>
      </div>
    </div>
  );
};

export default TotalBalance;
