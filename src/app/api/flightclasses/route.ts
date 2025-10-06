import { NextResponse } from "next/server";
import { callSP } from "@/lib/db";
import { SP } from "@/lib/sp";
import type { FlightClass } from "@/lib/types";

//GET
export async function GET() {
  const rows = await callSP<FlightClass>(SP.getFlightClasses);
  return NextResponse.json(rows, { status: 200 });
}
