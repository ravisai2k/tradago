import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    if (request.headers.has('Authorization'))
        return
    else
        return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: '/api/:path*'
}