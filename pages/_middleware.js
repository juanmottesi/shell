import redirects from "@lib/redirects";

export async function middleware(req) {
  return await redirects(req);
}
