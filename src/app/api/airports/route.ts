import { callSP } from "@/lib/db";
import { SP } from "@/lib/sp";
import type { Airport, SaveAirportBody } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

//Get
export async function GET() {
  const rows = await callSP<Airport>(SP.getAirports);
  return NextResponse.json(rows, { status: 200 });
}

//POST
export async function POST(req: NextRequest) {
  const body: SaveAirportBody = await req.json();

  if (
    !body.airport_name ||
    !body.airport_code ||
    !body.city_id ||
    !body.timezone
  ) {
    return NextResponse.json(
      {
        error:
          "airport_name, airport_code, city_id, and timezone must be filled",
      },
      { status: 400 }
    );
  }

  const id = body.airport_id ?? 0;
  try {
    await callSP(SP.saveAirport, [
      id,
      body.airport_name.trim(),
      body.airport_code.trim(),
      body.city_id,
      body.timezone.trim(),
    ]);
  } catch (err) {
    return NextResponse.json({ error: "Database Error", details: String(err) });
  }
  return NextResponse.json(
    { message: id == 0 ? "Created successfully" : "Updated successfully" },
    { status: id == 0 ? 201 : 200 }
  );
}
