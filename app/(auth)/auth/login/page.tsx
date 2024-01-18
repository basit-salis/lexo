"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import style from "@assets/css/login.module.css";

function Login() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [user, setUser] = useState({});
  type element = { userId: string; password: string };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      email: userId,
      password,
    };
    try {
      if (password !== "" && userId !== "") {
        const response = await fetch("/api/signin", {
          method: "POST",
          body: JSON.stringify({ data }),
        });
        let res = await response.json();
        if (!res.ok) {
          setErr(res.msg);
          //router.refresh();
          //test case
          router.push("/user/dashboard")
        } else router.push("/user/dashboard");
      } else {
        setErr("input cannot be empty");
      }
    } catch (error) {
      setErr("oops something went wrong, try again");
    } finally {
      setPassword("");
      setUserId("");
    }
  };

  return (
    <div
      className={`${style.login_wrapper} relative w-screen min-h-screen flex justify-center items-center`}>
      <form
        className={`w-full h-screen text-white flex flex-col gap-1 gap-y-2 justify-center items-center md:w-[30rem] md:h-[25rem]`}
        onSubmit={(e) => handleSubmit(e)}>
        <p className="text-3xl font-extralight p-5 md:text-4xl">
          Sign in to online banking
        </p>
        <input
          type="text"
          value={userId}
          className={` w-11/12 h-16 rounded-sm p-5 text-cyan-900 placeholder-cyan-900`}
          placeholder="User ID"
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          value={password}
          className={`w-11/12 h-16 rounded-sm p-5 text-cyan-900 placeholder-cyan-900`}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{err}</p>

        <button
          type="submit"
          className={`w-11/12 h-16 bg-blue-500 text-white rounded-sm p-2`}>
          Login
        </button>
        <div className="w-11/12 h-16 flex justify-between">
          <span className="">forgot password?</span>
          <Link href="/auth/signUp" className="">
            Open an account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
