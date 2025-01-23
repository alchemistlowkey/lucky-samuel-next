import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Lucky Samuel",
  description:
    "I'm a full-stack web Developer Skilled in designing and deploying robust web applications using frameworks like React, Next.js, SvelteKit e.t.c.",
  openGraph: {
    title: "Lucky Samuel",
    description:
      "I'm a full-stack web Developer Skilled in designing and deploying robust web applications using frameworks like React, Next.js, SvelteKit e.t.c.",
    url: "https://lucky-samuel-next.vercel.app",
    siteName: "Lucky Samuel",
    images: [
      {
        url: "https://lucky-samuel-next.vercel.app/opengraph-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: 'wp5DY8gv9e4jfw2n1Xi8NKFcXXJA04DHRNKaBZDA0cQ',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
