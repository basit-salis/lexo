"use client";
import React, { useState } from "react";
import style from "@assets/css/login.module.css";
import { useRouter } from "next/navigation";

export default function SignupMail() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let route = useRouter();
  const handleSignup = (e: any) => {
    e.preventDefault();
    const postData = async () => {
      const data = {
        Fname,
        Lname,
        email,
        password,
      };

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({ data }),
      });
      return response.json();
    };
    postData().then((data) => {
      if (data.response) {
        console.log(data);
        route.push("/auth/signUp/authmail/confirm_mail");
      } else {
        route.refresh();
      }
    });
  };
  return (
    <form
      onSubmit={(e) => handleSignup(e)}
      className={`${style.login_wrapper} w-full h-screen absolute flex flex-col justify-center items-center gap-1 text-white gap-y-2`}>
      <span>
        <p className="text-3xl font-extralight text-center p-5 md:text-4xl">
          signup and validate later
        </p>
      </span>
      <input
        type="text"
        value={Fname}
        className="w-11/12 h-16 rounded-sm p-5 text-cyan-900 placeholder-cyan-900 md:w-7/12 lg:w-2/5"
        placeholder="Enter your name first name"
        onChange={(e) => setFname(e.target.value)}
      />
      <input
        type="text"
        value={Lname}
        className="w-11/12 h-16 rounded-sm p-5 text-cyan-900 placeholder-cyan-900 md:w-7/12 lg:w-2/5"
        placeholder="Enter your name last name"
        onChange={(e) => setLname(e.target.value)}
      />
      <input
        type="email"
        value={email}
        className="w-11/12 h-16 rounded-sm p-5 text-cyan-900 placeholder-cyan-900 md:w-7/12 lg:w-2/5"
        placeholder="Enter your email address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        className="w-11/12 h-16 rounded-sm p-5 text-cyan-900 placeholder-cyan-900 md:w-7/12 lg:w-2/5"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-11/12 h-16 bg-blue-500 text-white rounded-sm p-2 md:w-7/12 lg:w-2/5">
        submit
      </button>
    </form>
  );
}
