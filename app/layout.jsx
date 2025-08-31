import { Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const bebasNeue = Bebas_Neue({
  weight: "400", // only one weight available
  subsets: ["latin"],
});

export const metadata = {
  title: "eSports Hub - Ultimate Tournament Platform",
  description: "Join tournaments, take courses, and compete in the ultimate esports arena",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}


