import { NextResponse } from "next/server";
import { callSP } from "@/lib/db";
import { SP } from "@/lib/sp";
import type { User } from "@/lib/types";

//Get
export async function GET() {
  const rows = await callSP<User>(SP.getUsers);
  return NextResponse.json(rows, { status: 200 });
}
