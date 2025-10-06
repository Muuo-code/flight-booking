import { NextRequest, NextResponse } from "next/server";
import { callSP } from "@/lib/db";
import { SP } from "@/lib/sp";
import type { City, SaveCityBody } from "@/lib/types";

// Get
export async function GET() {
  const rows = await callSP<City>(SP.getCities);
  return NextResponse.json(rows, { status: 200 });
}

//Post
export async function POST(req: NextRequest) {
  const body: SaveCityBody = await req.json();

  if (!body.city_name || !body.country_id) {
    return NextResponse.json(
      { error: "City name and country name are required" },
      { status: 400 }
    );
  }

  const id = body.city_id ?? 0;
  try {
    await callSP(SP.saveCity, [id, body.city_name.trim(), body.country_id]);
  } catch (err) {
    return NextResponse.json(
      { error: "Database Error", details: String(err) },
      { status: 500 }
    );
  }
  return NextResponse.json(
    { message: id == 0 ? "City created" : "City updated" },
    { status: id == 0 ? 201 : 200 }
  );
}
