"use client";

import Image from "next/image";

import { CustomButton } from "@components";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero text-white relative">
      <div className="h-full relative flex flex-col place-items-center pt-28 padding-x lg:place-items-start lg:w-5/12 lg:ml-24 before:absolute before:right-0 before:top-0 before:left-0 before:bottom-0 before:backdrop-blur-lg before:bg-blue-600 before:bg-opacity-10 before:-z-10">
        <h1 className="hero__title">
          Make your life easier with online banking
        </h1>

        <p className="hero__subtitle text-white">
          Explore and enjoy banking at your fingertips,anywhere, and anytime
        </p>

        <CustomButton
          title="Open an Account"
          containerStyles="text__blue w-44 bg-white rounded-full mt-6"
          handleClick={() => router.push("/auth/signUp")}
        />
      </div>

      <div className="w-1/2  h-full absolute right-0 hidden lg:flex before:absolute before:right-0 before:top-0 before:left-0 before:bottom-0 before:backdrop-blur-lg before:bg-blue-600 before:bg-opacity-10 before:-z-10 lg:before:w-3/12 before:ml-[75%]"></div>
    </div>
  );
};

export default Hero;
