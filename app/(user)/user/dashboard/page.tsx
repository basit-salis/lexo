import {
  CCcard,
  EditCard,
  QuickTransactions,
  RecentActivities,
  TotalBalance,
} from "@components";
import { User } from "@constants";
import React from "react";

const UserDashboard = () => {
  const handleEditCard = () => {
    console.log("yes");
  };
  return (
    <div>
      <TotalBalance />
      {/* <EditCard /> */}

      <div>
        <span className="flex justify-between items-center py-2">
          <span className="flex justify-between text-lg font-thin">Card</span>{" "}
          <span className="flex justify-between text-sm font-thin cursor-pointer">
            add card <i className="mdi mdi-plus"></i>
          </span>
        </span>
        <div className="scroll__hide h-full flex items-center overflow-x-auto scroll-smooth gap-2">
          {User[0].cards.map((data) => (
            <CCcard card={data} key={data.logo} />
          ))}
        </div>
      </div>

      <QuickTransactions />
      <RecentActivities />
    </div>
  );
};

export default UserDashboard;
