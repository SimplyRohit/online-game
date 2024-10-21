import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const Cookie = cookieStore.getAll();
  if (Cookie.length > 0) {
    return NextResponse.json({ name: Cookie[0].value, id: Cookie[1].value });
  } else {
    return new Response("not found", { status: 404 });
  }
}
