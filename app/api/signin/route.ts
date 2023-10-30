import { NextResponse } from "next/server";
import clientPromise from "@/libs/mongodb";
import User from "@/models/User";
import bcryptjs from "bcryptjs";
import { cookies } from "next/headers";

// create user
export const POST = async (request: Request, params: any) => {
  const { data } = await request.json();
  let client = await clientPromise;
  const db = client.db("lexo");
  try {
    // check if user in db
    const user = await db.collection("users").findOne({
      email: data.email,
    });
    console.log(user)
    if (user) {
      // check pass
      let checkPass = await bcryptjs.compare(data.password, user.password);
      if (checkPass) {
        let userCookie = {
          email: data.email,
        };
        // set cookies
        const response = NextResponse.next();
        response.cookies.set({
          name: "user",
          value: JSON.stringify(userCookie),
          path: "/",
        });
        console.log(user);
        return NextResponse.json(
          { msg: "signin successful", ok: true },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          {
            msg: "authentication failed, check credentials",
            ok: false,
          },
          { status: 401 }
        );
      }
    } else {
      // user no dey
      return NextResponse.json(
        {
          msg: "authentication failed",
          ok: false,
        },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { msg: "server error try again", ok: false },
      { status: 500 }
    );
  }
};
