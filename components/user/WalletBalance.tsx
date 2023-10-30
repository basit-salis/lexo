import React from "react";

interface IProp {
  cardDetail: {
    title: string;
    agency: string;
    balance: number;
    bank: string;
    card: string;
    expire: string;
    CVV: string;
    logo: string;
  };
}
const WalletBalance = ({ cardDetail }: IProp) => {
  return (
    <div className="w-full flex flex-col items-center padding-y">
      <span className="text-[12px] font-light">Available Balance</span>
      <span className="font-bold text-lg">${cardDetail.balance}.00</span>
      <span className="font-extralight text-[12px] mt-2">
        {cardDetail.bank}
      </span>
      <span className="text-sm">{cardDetail.title}</span>
    </div>
  );
};

export default WalletBalance;
