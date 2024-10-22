"use server";
import { cookies } from "next/headers";
export async function CheckCookiesAction() {
  const cookieStore = cookies();
  const nameCookie = cookieStore.get("name");
  if (nameCookie) {
    return "yes";
  } else {
    return "no";
  }
}
