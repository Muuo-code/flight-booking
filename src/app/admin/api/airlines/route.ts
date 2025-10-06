import { NextRequest, NextResponse } from "next/server";
import { callSP } from "@/lib/db";
import { SP } from "@/lib/sp";
import type { Airline, SaveAirlineBody } from "@/lib/types";

// GET
export async function GET() {
  const rows = await callSP<Airline>(SP.getAirline);
  return NextResponse.json(rows, { status: 200 });
}

// POST
export async function POST(req: NextRequest) {
  const body: SaveAirlineBody = await req.json();

  if (!body.airline_name || !body.airline_code) {
    return NextResponse.json(
      { error: "Airline name and code are required" },
      { status: 400 }
    );
  }

  const id = body.airline_id ?? 0;
  try {
    await callSP(SP.saveAirline, [
      id,
      body.airline_code.trim(),
      body.airline_code.trim(),
      body.logo_url.trim(),
    ]);
  } catch (err) {
    return NextResponse.json(
      { error: "Database error", details: String(err) },
      { status: 500 }
    );
  }
  return NextResponse.json(
    { message: id == 0 ? "Airline created" : "Airline updated" },
    { status: id == 0 ? 201 : 200 }
  );
}
