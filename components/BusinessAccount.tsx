"use client";
import { CustomButton } from "@components";
import Image from "next/image";
import React from "react";

const BusinessAccount = () => {
  return (
    <div
      className="business__account relative h-[30rem] flex flex-col justify-center items-center bg-zinc-100 padding-x lg:items-start"
      id="Services">
      <Image
        src={"/dv.jpg"}
        alt="Business Account"
        fill
        className="object-cover z-10"
      />
      <div className="text-white flex flex-col justify-center items-center z-40 lg:items-start">
        <h1 className="text-2xl text-center text-white pt-10 md:text-5xl capitalize">
          do you run a business
        </h1>
        <p className="text-center font-extralight md:text-start md:text-2xl">
          Explore our business bank account, Loans <br /> and payment solution
        </p>
        <CustomButton
          title="Tell me more"
          containerStyles="bg-blue-600 text-white rounded-full mt-8"
          handleClick={() => console.log("click")}
        />
      </div>
    </div>
  );
};

export default BusinessAccount;

{
  /* <h1 className='text-2xl text-center text-cyan-900 pt-10 md:text-4xl capitalize'>do you run a business</h1>
<p className='text-center md:text-start'>Explore our business bank account, Loans <br /> and payment solution</p>
<CustomButton
          title="Tell me more"
          containerStyles="bg-primary-blue text-white rounded-full mt-8"
        /> */
}
