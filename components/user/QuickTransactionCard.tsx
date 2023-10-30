import React from "react";
import Image from "next/image";
interface IProp {
  trn: { title: string; src: string };
}
const QuickTransactionCard = ({ trn }: IProp) => {
  return (
    <div className=" text-[10px] w-auto h-10 pr-2 mx-1 capitalize rounded-full font-light border border-slate-400 flex justify-between items-center relative z-50 before:absolute before:rounded-full before:right-0 before:bottom-0 before:left-0 before:top-0 before:bg-slate-50 before:opacity-10 before:-z-10 before:content['']">
      <span className="w-10 h-full rounded-full relative overflow-hidden">
        <Image src={trn.src} alt="profile" sizes="20" fill />
      </span>

      <p className="px-1">{trn.title}</p>
    </div>
  );
};

export default QuickTransactionCard;
