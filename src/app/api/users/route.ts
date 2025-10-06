import { NextRequest, NextResponse } from "next/server";
import { callSP } from "@/lib/db";
import { SP } from "@/lib/sp";
import bcrypt from "bcryptjs";
import type { SaveUserBody } from "@/lib/types";

//POST
export async function POST(req: NextRequest) {
  try {
    const body: SaveUserBody = await req.json();

    if (!body.full_name || !body.email || !body.password) {
      return NextResponse.json(
        { error: "Full name, email and password required" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const id = body.user_id ?? 0;

    await callSP(SP.saveUser, [
      id,
      body.full_name.trim(),
      body.email.trim(),
      hashedPassword,
      body.phone_number ?? "",
      body.nationality ?? "",
      body.date_of_birth ?? "",
    ]);

    return NextResponse.json(
      { message: id == 0 ? "User created" : "User updated" },
      { status: id == 0 ? 201 : 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Database error", details: String(err) },
      { status: 500 }
    );
  }
}
