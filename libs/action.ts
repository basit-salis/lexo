"use server";

import { cookies } from "next/headers";

async function deleteCookie() {
  cookies().delete("user");
}



export default deleteCookie