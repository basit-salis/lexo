import { RecentActivity } from "@components";
import {User} from "@constants"
import React from "react";

const RecentActivities = () => {
 

  return (
    <div className="w-full flex flex-col relative padding-y">
      <span className="w-full flex justify-between text-lg font-thin">
        <span>Recent Activity</span>{" "}
        <span className="text-[12px] font-thin">see All</span>
      </span>
      {User[0].Tranasactions.map((transaction) => (
        <RecentActivity activity={transaction} key={transaction.desc} />
      ))}
    </div>
  );
};

export default RecentActivities;
