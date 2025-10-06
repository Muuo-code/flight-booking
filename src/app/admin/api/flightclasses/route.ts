import { NextRequest, NextResponse } from "next/server";
import { callSP } from "@/lib/db";
import { SP } from "@/lib/sp";
import type { FlightClass, SaveFlightClassBody } from "@/lib/types";

//GET
export async function GET() {
  const rows = await callSP<FlightClass>(SP.getFlightClasses);
  return NextResponse.json(rows, { status: 200 });
}

//POST
export async function POST(req: NextRequest) {
  const body: SaveFlightClassBody = await req.json();

  if (!body.class_name) {
    return NextResponse.json(
      { error: "Class name is required" },
      { status: 400 }
    );
  }

  const id = body.class_id ?? 0;
  try {
    await callSP(SP.saveFlightClasses, [
      id,
      body.class_name.trim(),
      body.description.trim(),
    ]);
  } catch (err) {
    return NextResponse.json(
      { error: "Database error", details: String(err) },
      { status: 500 }
    );
  }
  return NextResponse.json(
    { message: id == 0 ? "Created successfully" : "Updated successfully" },
    { status: id == 0 ? 201 : 200 }
  );
}
