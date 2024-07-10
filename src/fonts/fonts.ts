import { Josefin_Sans } from "next/font/google";

const jose = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400","500", "600", "700"],
  variable: "--jose-sans",
})

export {
  jose
}