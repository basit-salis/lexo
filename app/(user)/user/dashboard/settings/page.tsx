import React from "react";
import Image from "next/image";
import { User } from "@constants";

const Settings = () => {
  return (
    <div className="w-screen h-[10 0vh] flex flex-col pt-5 box-border items-center text-[12px] text-slate-400 gap-y-4">
      <h2 className="w-1/2 text-2xl text-white">Profile page</h2>
      <div className="w-1/2 flex justify-start items-center">
        <span className="w-28 h-28 rounded-full border border-slate-400 relative overflow-hidden cursor-pointer">
          <Image src={"/mePic1.jpg"} alt="profile" sizes="20" fill />
        </span>
      </div>
      <span className="w-1/2">
        Account Name <br />{" "}
        <span className="text-sm text-white">{User[0].fname} {User[0].lname} </span>{" "}
      </span>
      <span className="w-1/2">
        Linked Email <br />
        <span className="text-sm text-white">{User[0].email}</span>
      </span>
      <span className="w-1/2">
        Account Type <br /> <span className="text-sm text-white">Business</span>{" "}
      </span>
      <span className="w-1/2 text-center text-sm text-white py-2 bg-slate-900 rounded-full">
        edit
      </span>
    </div>
  );
};

export default Settings;
