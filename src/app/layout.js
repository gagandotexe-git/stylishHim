
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./redux/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "StylishHim A men&rsquo;s ecosystem brand",
  description: "India&rsquo;s First Exclusive Men&rsquo;s Lifestyle Brand. Everything A Man Needs, In One Place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
