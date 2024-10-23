"use server";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";
export async function SetCookiesAction(name: string) {
  const cookieStore = cookies();
  const id = uuidv4();
  cookieStore.set("name", name, {
    path: "/",
  });
  cookieStore.set("id", id, {
    path: "/",
  });
  return { message: "Cookie set successfully" };
}
