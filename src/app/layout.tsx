import type { Metadata } from "next";
import "@/app/styles/stylesGlobal.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import StyledComponentsRegistry from "./registry";

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
        <StyledComponentsRegistry>
          <div className="container">{children}</div>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
