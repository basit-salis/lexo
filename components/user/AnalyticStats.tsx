"use client";
import { floatNavLink } from "@constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
interface IStats {
  stats: {
    spent: string;
    saved: string;
    week: string;
  };
}
export const AnalyticStats = ({spent, saved, week}:{spent:string, saved:string, week:string}) => {
  
  return (
    <div className="flex flex-col mr-5">
      <div className="w-14 h-44 gap-2 flex items-end">
        <div className={`w-4 ${spent} bg-slate-200 rounded-t-2xl`}/>
        <div className={`w-4 ${saved} bg-slate-500 rounded-t-2xl`} />
      </div>
      <span className="text-[11px] font-light">{week}</span>
    </div>
  );
};
