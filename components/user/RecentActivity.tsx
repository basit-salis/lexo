import React from "react";
import Image from "next/image";

interface IProp {
  activity: {
    img: string;
    amount: string;
    desc: string;
    date: string;
    time:string
    status: string;
  };
}
const RecentActivity = ({ activity }: IProp) => {
  return (
    <div className="w-full h-20 flex justify-between items-center border border-slate-400 rounded-2xl my-1 p-3 relative z-50 before:absolute before:rounded-2xl before:right-0 before:bottom-0 before:left-0 before:top-0 before:bg-slate-50 before:opacity-10 before:-z-10 before:content[''] ">
      <div className="h-full flex items-center">
        <span className="w-14 h-full rounded-xl relative overflow-hidden">
          <Image src={activity.img} alt="transactions" fill />
        </span>

        <p className="text-[13px] px-3">
          {activity.desc} <br />
          <span className="text-[11px] font-thin">{activity.date} <span className="text-slate-400 pl-1">{activity.time}</span></span> <br />
          <span
            className={`text-[11px] font-thin p-[2px] px-2 relative z-50 before:absolute before:rounded-2xl before:right-0 before:bottom-0 before:left-0 before:top-0 ${
              activity.status === "successful"
                ? "before:bg-green-400 "
                : activity.status === "unsuccessful"
                ? "before:bg-red-400 "
                : "before:bg-yellow-400 "
            } before:opacity-40 before:-z-10 before:content['']`}>
            {activity.status}
          </span>{" "}
        </p>
      </div>

      <p className="text-extralight text-[11px]">${activity.amount}</p>
    </div>
  );
};

export default RecentActivity;
