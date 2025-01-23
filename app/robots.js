export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://luckysamuel.engineer/sitemap.xml",
    sitemap: "https://lucky-samuel-next.vercel.app/sitemap.xml",
    sitemap: "https://luckysamuel.vercel.app/sitemap.xml",
  };
}
