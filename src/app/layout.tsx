import type { Metadata } from "next";
import "@/app/styles/stylesGlobal.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import StyledJsxRegistry from "./registry";
import { Suspense } from "react";
import Loading from "./components/loading";

export const metadata: Metadata = {
  title: "Lucas Gama",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <div className="container">{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
