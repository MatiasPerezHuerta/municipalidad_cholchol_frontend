import { NextResponse } from 'next/server';
import { getSiteContent } from '@/lib/site-data';

export async function GET() {
  return NextResponse.json(getSiteContent());
}
