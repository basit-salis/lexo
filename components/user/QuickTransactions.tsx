import { QuickTransactionCard } from "@components";
import { User } from "@constants";
import React from "react";

const QuickTransactions = () => {
  return (
    <div className="flex flex-col justify-around h-28 padding-y">
      <span className="text-lg font-thin">Quick Transaction</span>
      <div className="h-full flex items-center">
        <div className="w-14 h-10 rounded-full border flex justify-center items-center relative  text-slate-100 z-50 before:absolute before:rounded-full before:right-0 before:bottom-0 before:left-0 before:top-0 before:bg-slate-50 before:opacity-20 before:-z-10 before:content['']">
          <i className="mdi mdi-plus"></i>
        </div>

        <div className="scroll__hide h-full flex items-center overflow-x-auto overscroll-x-contain scroll-smooth">
          {User[0].quickTransactions.map((transaction) => (
            <QuickTransactionCard trn={transaction} key={transaction.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickTransactions;
