"use client";
import { useState } from "react";
import Image from "next/image";
import { Logout, Msg } from "@components";

// later fetch from db
import { User } from "@/constants";
const UserNavbar = () => {
  const [profile, setProfile] = useState(false);
  const [msg, setMsg] = useState(false);
  let handleClose = () => {
    setProfile((prev) => !prev);
  };

  let handleMsg = () => {
    setMsg((prev) => !prev);
  };

  return (
    <header className="">
      <nav className="h-14 flex justify-between items-center">
        {profile ? <Logout close={handleClose} /> : null}
        <span
          className="w-10 h-10 rounded-full border border-slate-400 relative overflow-hidden cursor-pointer"
          onClick={() => setProfile((prev) => !prev)}>
          <Image src={"/mePic1.jpg"} alt="profile" sizes="20" fill />
        </span>

        <span className="text-sm flex flex-col leading-[11px] capitalize">
          <p className="font-extralight text-[12px]">
            welcome back <i className="mdi mdi-bank px-1"></i>
          </p>
          <br /> {User[0].fname} {User[0].lname}
        </span>

        <span
          className="w-10 h-10 rounded-full cursor-pointer border border-slate-400 flex justify-center items-center relative overflow-hidden before:absolute before:rounded-full before:right-0 before:bottom-0 before:left-0 before:top-0 before:bg-slate-50 before:opacity-10 before:-z-10 before:content['']"
          onClick={() => setMsg((prev) => !prev)}>
          <i className="mdi mdi-bell-outline"></i>
        </span>
        {msg ? <Msg close={handleMsg} /> : null}
      </nav>
    </header>
  );
};

export default UserNavbar;

// Q6tietZEvPixNYle

// mongodb+srv://basit:<password>@lexo.aipbkb6.mongodb.net/
// dgKOEe3cDKUkiyGf
