"use client";
import { SendModal } from "@components";
import { floatNavLink } from "@constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const FloatingNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div>
      <SendModal />
      <div className="h-14 w-[88%] flex place-content-center fixed bottom-3 z-50">
        <div className="h-full w-full p-1 flex justify-evenly items-center rounded-full bg-slate-900">
          {floatNavLink.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                className={`h-full flex place-items-center flex-1 place-content-center  rounded-full px-1 ${
                  isActive ? "bg-white text-slate-900 border" : null
                }`}
                key={item.title}>
                <i className={`mdi ${item.icon} px-1 text-lg`}></i>
                {isActive ? <p className="text-xs">{item.title}</p> : null}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
