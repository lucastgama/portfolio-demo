import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SkillProvider from "./context/skillContext";

export const metadata: Metadata = {
  title: "Portfolio do Lucas Gama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.ico" />

      <body>
        <Navbar />
        <SkillProvider>{children}</SkillProvider>
        <Footer />
      </body>
    </html>
  );
}
