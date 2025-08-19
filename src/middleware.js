import { NextResponse } from "next/server";
import getAuthUser from "./lib/getAuthUser";

const protectedRoutes = ['/dashboard', '/posts/create'];
const publicRoutes = ['/login', '/register'];

export default async function middleware(req) {

    // console.log("middleware called");

    const path = req.nextUrl.pathname;
    const isProtected = protectedRoutes.includes(path) 
        || path.startsWith('/posts/edit')
    const isPublic = publicRoutes.includes(path);

    console.log(path);

    const user = await getAuthUser();
    const userId = user?.userId;

    if(isProtected && !userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    if(isPublic && userId) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    return NextResponse.next();

    // console.log(path);

}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}