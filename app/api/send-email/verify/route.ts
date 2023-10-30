import clientPromise from "@libs/mongodb";
import { NextResponse } from "next/server";

// check opt and verify
export const POST = async (request: Request) => {
  const { data } = await request.json();
  const client = await clientPromise;
  const db = client.db("lexo");
  console.log("data:", data);
  try {
    let response = NextResponse.next();
    let hasCookie = response.cookies.has("confirmOTP");
    if (hasCookie) {
      const myCookie = response.cookies.get("confirmOTP");
      const parsedCookie = JSON.parse(myCookie!.value);
      // console.log(parsedCookie);
      const authStat = parsedCookie.otp === data.otp ? true : false;
      if (authStat) {
        // check if user already exist
        const isExist = await db.collection("users").findOne({
          where: {
            email: parsedCookie.email,
          },
        });
        if (!isExist) {
          return NextResponse.json(
            { msg: "user already exist", ok: false },
            { status: 201 }
          );
        }
        await db.collection("users").insertOne({
          email: parsedCookie.email,
          fname: parsedCookie.fname,
          lname: parsedCookie.lname,
          password: parsedCookie.password,
        });

        // await newUser.save();
        return NextResponse.json(
          { msg: "Account Created, Login", ok: true },
          { status: 201 }
        );
      } else {
        return NextResponse.json(
          { msg: "Invalid OTP entered", ok: false },
          { status: 401 }
        );
      }
    } else {
      return NextResponse.json(
        { msg: "OTP expired", ok: false },
        { status: 406 }
      );
    }
  } catch (error) {
    console.log("error");
    throw new Error("server error try again");
  }
};
