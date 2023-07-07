import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // const path = request.nextUrl.pathname
    // const token = request.cookies.get('token')?.value || ""
    // if(token && (path==='/login'||path==='/signup'||path==='/')){
    //   return NextResponse.redirect(new URL('/products', request.url))
    // }
    
} 
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/products/:path*'
  ],
}