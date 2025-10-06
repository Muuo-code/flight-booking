import { error } from "console";
import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
  connectionLimit: 10,
});

export async function callSP<T>(
  sql: string | undefined,
  params: (string | number)[] = []
): Promise<T[]> {
  if (!sql) {
    throw new Error(
      "callSP: Missing SQL string. Did you forget to define or import the SP mapping?"
    );
  }

  try {
    const [rows] = await pool.query(sql, params);
    return Array.isArray(rows) ? (rows[0] as T[]) : [];
  } catch (err) {
    throw new Error(
      `callSP failed for SQL "${sql}" with params ${JSON.stringify(
        params
      )}. Original error: ${String(err)}`
    );
  }
}
