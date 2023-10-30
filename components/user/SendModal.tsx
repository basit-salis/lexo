"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const SendModal = () => {
  const pathname = usePathname();
  let router = useRouter();
  let path = pathname === "/user/dashboard/walletdetail";

  return (
    <div
      className={`w-full fixed capitalize flex justify-start items-center transition-all duration-150 ${
        path ? "top-3 z-20 translate-y-24" : "none"
      }`}>
      <div className="flex flex-col relative w-11/12 p-2 text-lg font-light justify-center items-center text-cyan-900 bg-white rounded-2xl">
        <h2 className="text-2xl font-semibold w-4/6 pb-2">Make Payment</h2>

        <p className="py-1 w-4/6">
          <span className="mdi mdi-account-outline mr-1"></span> send to Account
        </p>
        <p className="py-1 w-4/6">
          <span className="mdi mdi-qrcode mr-1"></span>Generate qrcode
        </p>
        <p className="py-1 w-4/6">
          <span className="mdi mdi-magnify mr-1"></span>scan qrcode
        </p>
        <p
          className="py-2 mt-3 w-4/6 bg-blue-500 text-white rounded-full text-center"
          onClick={() => router.back()}>
          {" "}
          close
        </p>
      </div>
    </div>
  );
};

export default SendModal;
