"use server";
import { cookies } from "next/headers";

export async function GetCokkiesAction() {
  const cookieStore = cookies();
  const Cookie = cookieStore.getAll();
  if (Cookie.length > 0) {
    return { name: Cookie[0].value, id: Cookie[1].value };
  } else {
    return {
      message: "Cookies not found",
      status: 404,
    };
  }
}
