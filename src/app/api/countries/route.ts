import { NextRequest, NextResponse } from "next/server";
import { callSP } from "@/lib/db";
import { SP } from "@/lib/sp";
import type { Country, SaveCountryBody } from "@/lib/types";

// Get countries
export async function GET() {
  const rows = await callSP<Country>(SP.getCountry);
  return NextResponse.json(rows, { status: 200 });
}

// Save Country
export async function POST(req: NextRequest) {
  const body: SaveCountryBody = await req.json();

  if (!body.country_name) {
    return NextResponse.json(
      { error: "Country name is required" },
      { status: 400 }
    );
  }

  const id = body.country_id ?? 0;
  await callSP(SP.saveCountry, [id, body.country_name.trim()]);

  return NextResponse.json(
    { message: id == 0 ? "Country created" : "Country updates" },
    { status: id == 0 ? 201 : 200 }
  );
}
