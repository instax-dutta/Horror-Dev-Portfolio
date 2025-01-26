import type { Metadata } from "next"
import { Cinzel_Decorative, Crimson_Text } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import HorrorParticles from "@/components/HorrorParticles"

const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-cinzel" })
const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-crimson" })

export const metadata: Metadata = {
  title: "Tejes Munde - Developer Portfolio",
  description: "Portfolio of Tejes Munde, a developer and game tester",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${crimson.variable} font-sans bg-black text-red-600`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen bg-[url('/horror-bg.jpg')] bg-cover bg-center bg-fixed">
            <div className="min-h-screen bg-black bg-opacity-70 relative">
              <HorrorParticles />
              <div className="relative z-20">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

