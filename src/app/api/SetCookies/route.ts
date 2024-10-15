import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    const cookieStore = cookies();
    cookieStore.set("name", name, {
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
