import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StyledComponentsRegistry from "../../StyledComponentsRegistry";
import { GlobalStyle } from "../../globalStyles";
import Navbar from "../../components/ClientNavbar"; // Navbar Here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mood Booster",
  description: "A daily 2-minute mental health break app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalStyle />
        <StyledComponentsRegistry>
          <Navbar /> {/* ✅ Navbar placed here */}
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
