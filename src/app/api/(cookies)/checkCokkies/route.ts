import { cookies } from "next/headers";
export async function GET() {
  const cookieStore = cookies();
  const nameCookie = cookieStore.get("name");

  if (nameCookie) {
    return new Response("yes");
  } else {
    return new Response("no");
  }
}
