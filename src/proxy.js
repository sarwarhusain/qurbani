import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    //if not user
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  //   runtime: "nodejs", x// Required for auth.api calls
  matcher: ["/allAnimals/:path*", "/featured/:path*"], // Specify the routes the proxy applies to
};
