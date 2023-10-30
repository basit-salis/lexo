import React from "react";

export default function TemplateMail() {
  return (
    <div className="w-screen h-screen text-cyan-900 flex flex-col p-5 ">
      <span className="w-full h-20 bg-cyan-900 text-blue-400 flex justify-center items-center font-bold text-2xl">
        LEXO BANK
      </span>
      <span className="font-bold text-lg py-3">[ Lexo Bank] Verification Code</span>
      <p className="py-2 text-sm font-thin">Your verification code:</p>
      <span className="text-blue-500 py-3 text-lg font-light">23242</span>
      <p>
        The verification code will be valid for 30 minute. please do <br /> not
        share this code with anyone. Don&apos;t recognise this activity? <br />{" "}
        Please <span className="text-blue-500">reset your password</span> and
        contact customer support immediately
      </p>

      <p className="border-t py-2">
      This is an automated message, please do not reply.
      </p>
    </div>
  );
}
