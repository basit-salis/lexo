import React from "react";
import { User } from "@/constants";

const Msg = ({ close }: { close: () => void }) => {
  return (
    <div className="scroll__hide w-9/12 max-h-[30vh] text-lg shadow-sm shadow-slate-200 text-cyan-900 border-2 border-slate-100 leading-tight flex flex-col absolute p-2 top-3 gap-2 right-5 rounded-lg bg-white z-50 overflow-y-auto">
      <p className="flex justify-between">
        Recent notifications{" "}
        <span
          className="mdi mdi-close text-xl active:text-slate-300 cursor-pointer"
          onClick={() => close()}></span>
      </p>

      {User[0].Notifications.map((notification) => (
        <p
          className="w-full h-16 p-1 px-2 font-bold flex flex-col relative text-[11px] text-white before:absolute before:rounded-lg before:right-0 before:bottom-0 before:left-0 before:top-0 before:bg-blue-500 before:opacity-90 before:-z-10 before:content['']"
          key={notification.id}>
          {notification.head}
          <span className="font-normal">{notification.body}</span>
        </p>
      ))}
    </div>
  );
};

export default Msg;
