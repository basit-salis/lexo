import React from "react";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center gap-4 text-sm md:text-lg">
      <div className="w-screen h-[20rem] relative flex justify-center items-center lg:h-[40rem]">
        <Image src="/3ds.jpg" alt="hero" fill />
        <p className="absolute text-white text-2xl font-semibold">
          OPEN AN ACCOUNT
        </p>
      </div>
      <div className="flex flex-col gap-4 text-sm padding-x py-5 lg:text-lg lg:px-20 lg:w-1/2">
        <p className="text-sky-400 text-lg lg:text-xl">Be Unstoppable</p>
        <h2 className="text-xl font-light py-5 lg:text-3xl">
          Welcome to the SC Mobile experience. Explore and enjoy banking at your
          fingertips, anytime, anywhere.
        </h2>

        <h1 className="text-lg lg:text-xl font-bold">
          How to open an Instant Account with SC Mobile App
        </h1>

        <span>1. Download our mobile app and tap on Open Account</span>
        <span>2. Start the application by uploading required documents</span>
        <span>
          3. Take a selfie photo and upload your valid ID and signature
        </span>

        <span>4. Please review/provide your ID details</span>
        <span>5. Update your contact details(where required)</span>
        <span>
          6. Review the details you have provided and accept the Term and
          Conditions.
        </span>
        <span>
          7. Submit the request and wait for a while for your account to be
          created. Note: where account number is not displayed immediately on
          the screen. Temporary registration details will be sent to your email
          address and mobile number after a whilee.
        </span>
        <Link
          href="/auth/signUp/authmail" 
          className="w-11/12 h-16 bg-blue-500 text-white flex justify-center items-center rounded-sm p-2">
          Or Signup Here
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
