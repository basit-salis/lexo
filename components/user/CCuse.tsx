import React from "react";

const CCuse = ({detail}:any) => {
 
  return <div className="flex flex-col rounded-3xl w-24 h-16  border border-slate-400 justify-center items-center relative overflow-hidden z-10 before:absolute before:rounded-2xl before:right-0 before:bottom-0 before:left-0 before:top-0 before:bg-slate-50 before:opacity-10 before:-z-10 before:content['']">
    <i className={`mdi ${detail.icon}`}></i>
    <p className="text-[12px] font-light">{detail.title}</p>
  </div>;
};

export default CCuse;
