"use client";
import deleteCookie from "@libs/action";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

interface IProp {
  close: () => void;
}
const Logout = ({ close }: IProp) => {
  let router = useRouter();

  return (
    <div
      className={`w-full fixed  capitalize flex justify-start items-center top-12 z-50`}>
      <div className="flex flex-col shadow-sm shadow-cyan-900 relative w-4/12 p-2 text-center text-[12px] font-light justify-center items-center text-cyan-900 bg-white rounded-2xl">
        <p
          className="py-2 w-3/6 border-b border-cyan-900"
          onClick={() => {
            close();
            router.push("/user/dashboard/settings");
          }}>
          Profile
        </p>
        <p
          className="py-2 w-3/6"
          onClick={() => {
            deleteCookie();
          }}>
          Logout
        </p>
        <p
          className="py-2 mt-3 w-full bg-blue-500 text-white rounded-full text-center"
          onClick={() => close()}>
          close
        </p>
      </div>
    </div>
  );
};

export default Logout;
