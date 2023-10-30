"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface ICard {
  card: {
    id: number;
    title: string;
    agency: string;
    balance: number;
    bank: string;
    card: string;
    expire: string;
    logo: string;
  };
}





const CCcard = ({ card }: ICard) => {
  const router = useRouter();
  return (
    <div className="min-w-[12rem] flex flex-col border p-2 rounded-2xl bg-white text-cyan-900">
      <p className="font-semibold">{card.agency}</p>
      <p className="py-1 text-[12px] font-light">
        Balance <br />
        <span className="p-0 font-bold text-2xl">${card.balance}.00</span>
      </p>
      <Image src={card.logo} alt="logo" width={50} height={5} />
      <p className="py-1 text-[11px] font-light">{card.bank}</p>
      <p className="font-semibold">
        {card.title} <br /><span className="text-[12px] font-light">{card.card}</span>
      </p>
      <p className="py-2 text-[12px] font-light">
        Expiry Date {card.expire}{" "}
        <Link className="rounded-full p-2 px-5 ml-2 text-white bg-cyan-900"
         href={`/user/dashboard/${card.title.split(' ')[0]}`}>
          Edit
        </Link>
      </p>
    </div>
  );
};

export default CCcard;
