// Cloudflare Pages: send the bare domain to www so there is one address for the site.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === "stoneartprecision.com") {
    url.hostname = "www.stoneartprecision.com";
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
