import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import moment from 'moment';

let weeknumber = moment().week();

export async function GET(request: Request) {
  try {
    const result =
      await sql`SELECT * FROM trainingsprint WHERE weeknummer = ${weeknumber}`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}