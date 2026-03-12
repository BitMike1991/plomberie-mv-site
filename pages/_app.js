import "@/styles/globals.css"
import { Space_Grotesk, DM_Sans } from "next/font/google"

const heading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading-ref",
})

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-ref",
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${heading.variable} ${body.variable} font-sans grain`}>
      <Component {...pageProps} />
    </div>
  )
}
