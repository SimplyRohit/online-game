import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";
export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    const cookieStore = cookies();
    const id = uuidv4();
    cookieStore.set("name", name, {
      path: "/",
    });
    cookieStore.set("id", id, {
      path: "/",
    });
    return NextResponse.json({ message: "Cookie set successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error setting cookie" },
      { status: 500 }
    );
  }
}
