"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Confirm() {
  const router = useRouter();
  const [otp, setOtp] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
  });

  const handleConfirmation = async () => {
    let valueEntered = Object.values(otp).join("");
    let data = {
      otp: valueEntered,
      email: "basitsalis2131@gmail.com",
    };

    let response = await fetch(`/api/send-email/verify`, {
      method: "POST",
      body: JSON.stringify({ data }),
    });

    let res = await response.json();
    console.log("res", res);
    if (res.ok) {
      let userRes = confirm(res.msg);
      userRes ? router.push("/user/dashboard") : router.push("/user/login");
    } else {
      alert(res.msg);
      if (res.status === 406) router.push("/auth/signUp/authmail");
    }
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-2 p-5">
      <span className="text-2xl">Verify Your Account</span>
      <span className="text-lg text-center">
        we have sent you a 5 digit code to verify your account
      </span>
      <div className="w-full grid grid-cols-5 content-stretch justify-items-stretch text-center gap-1 py-5 md:w-7/12 lg:w-2/5">
        <input
          type="text"
          value={otp.a}
          name="a"
          className=" rounded-md p-5 text-xl font-bold border shadow-sm"
          onChange={(e) =>
            setOtp((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <input
          type="text"
          value={otp.b}
          name="b"
          className="rounded-md p-5 text-xl font-bold border shadow-sm"
          onChange={(e) =>
            setOtp((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <input
          type="text"
          value={otp.c}
          name="c"
          className="rounded-md p-5 text-xl font-bold border shadow-sm"
          onChange={(e) =>
            setOtp((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <input
          type="text"
          value={otp.d}
          name="d"
          className="rounded-md p-5 text-xl font-bold border shadow-sm"
          onChange={(e) =>
            setOtp((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <input
          type="text"
          value={otp.e}
          name="e"
          className="rounded-md p-5 text-xl font-bold border shadow-sm"
          onChange={(e) =>
            setOtp((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </div>
      <button
        className="w-full h-16 bg-blue-500 text-white rounded-md shadow-sm shadow-blue-200 p-2 md:w-7/12 lg:w-2/5"
        onClick={() => handleConfirmation()}>
        verify
      </button>
      <span>
        did not receive code{" "}
        <Link href="/auth/signUp/authmail" className="text-blue-400 mt-5 px-1">
          Resend
        </Link>
      </span>
    </div>
  );
}
