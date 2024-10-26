"use server";
import { cookies } from "next/headers";
export async function CheckCookiesAction() {
  const cookieStore = cookies();
  const name = cookieStore.get("name");
  const id = cookieStore.get("id");
  if (name && id) {
    return { id: id.value, name: name.value };
  } else {
    return "no";
  }
}
