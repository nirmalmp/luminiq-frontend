import { NextResponse } from 'next/server';

const ALLOWED_HOSTS = ['luminiqmedia.com', 'www.luminiqmedia.com', 'localhost', '127.0.0.1'];

export function middleware(request) {
  const host = request.headers.get('host')?.split(':')[0];

  if (host && !ALLOWED_HOSTS.includes(host)) {
    return new NextResponse(null, { status: 444 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.svg|logo.svg|api/).*)',
};
