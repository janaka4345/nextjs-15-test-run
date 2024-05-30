import { NextResponse } from "next/server";

// export const dynamic = 'force-dynamic' // defaults to auto

export  async function GET(){
    return NextResponse.json({date:new Date().toISOString()})
}