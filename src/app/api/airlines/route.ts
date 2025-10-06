import { NextResponse } from "next/server";
import { callSP } from "@/lib/db";
import { SP } from "@/lib/sp";
import type { Airline } from "@/lib/types";

//Get
export async function GET() {
  const rows = await callSP<Airline>(SP.getAirline);
  return NextResponse.json(rows, { status: 200 });
}
