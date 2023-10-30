"use client";
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { navLinks } from "@constants";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = async (id: string) => {
    const nextSection = document.getElementById(id);
    setIsOpen(false);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header
      className={`w-full text-white ${
        isOpen ? "fixed" : "absolute"
      }  transition-all delay-75 before:absolute before:right-0 before:top-0 before:left-0 before:bottom-0 before:-z-10 before:bg-transparent before:bg-opacity-50  lg:before:blue-600 ${
        pathname === "/" ? "lg:before:bg-blue-900" : null
      }  
      
      
       ${
         isOpen ? "h-screen bg-blue-500 fixed md:h-16" : "h-16"
       } flex-col justify-around items-center  z-50 md:justify-between }`}>
      <div className="w-full h-14 items-center flex justify-between px-2 md:w-auto md:hidden">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/lexo-Bank-new-logo-white.png"
            alt="logo"
            width={80}
            height={10}
          />
        </Link>

        <span className={`${pathname === "/" ? "flex" : "flex"} md:hidden`}>
          {isOpen ? (
            <i
              className="mdi mdi-close text-4xl"
              onClick={() => setIsOpen((prev) => !prev)}></i>
          ) : (
            <i className=" text-4xl" onClick={() => setIsOpen((prev) => !prev)}>
              <Image
                src={"/menu-black.svg"}
                width={40}
                height={40}
                alt="menu"
              />
            </i>
          )}
        </span>
      </div>

      <nav
        className={`max-w-[1440px] h-screen mx-auto flex-col justify-start items-center sm:px-16 px-6 py-4 bg-transparent md:flex-row md:justify-between md:h-full ${
          isOpen ? "flex " : "hidden md:flex"
        }`}>
        <div className="hidden w-full h-14 items-center justify-between px-5 md:w-auto md:flex">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/lexo-Bank-new-logo-white.png"
              alt="logo"
              width={100}
              height={5}
            />
          </Link>
        </div>

        <ul
          className={`w-4/6 h-[65vh] flex flex-col justify-end items-center md:flex-row md:justify-between md:h-full md:w-3/6 md:pb-0 md:opacity-100 ${
            isOpen ? "flex" : "hidden"
          } md:flex`}>
          {pathname === "/"
            ? navLinks.map((item) => (
                <li
                  className="w-full h-16 text-center cursor-pointer transition-all delay-100 hover:text-blue-100 hover:scale-110 md:h-auto md:px-1"
                  key={item.title}
                  onClick={() => handleScroll(item.title)}>
                  {item.title}
                </li>
              ))
            : null}
        </ul>

        {pathname === "/auth/login" ? (
          <CustomButton
            title="Sign Up"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white h-10 min-w-[130px]"
            handleClick={() => {
              router.push("/auth/signUp/authmail");
              setIsOpen(false);
            }}
          />
        ) : (
          <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white h-10 min-w-[130px]"
            handleClick={() => {
              router.push("/auth/login");
              setIsOpen(false);
            }}
          />
        )}
      </nav>
    </header>
  );
};
export default NavBar;
