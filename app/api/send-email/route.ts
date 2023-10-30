import { sendMail } from "@/libs/email-helper";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

// create election
export const POST = async (request: NextRequest) => {
  const { data } = await request.json();
  const confirmationCode = (
    Math.floor(Math.random() * 90000) + 10000
  ).toString();

  try {
    // send otp to mail
    await sendMail({
      recipient: data.email,
      confirmationCode,
    });

    // store otp in session
    const hashedPassword = await bcryptjs.hash(data.password, 10);
    let cookieObj = {
      email: data.email,
      fname: data.Fname,
      lname: data.Lname,
      password: hashedPassword,
      otp: confirmationCode,
    };
    let response = NextResponse.next();
    response.cookies.set({
      name: "confirmOTP",
      value: JSON.stringify(cookieObj),
    });
    return NextResponse.json({ response: true });
  } catch (error) {
    return NextResponse.json({ response: false });
  }
};
