"use client";

import "./globals.css";
import StyledComponentsRegistry from "./registry";
import Navigation from './components/navbar'
import Footer from "./components/footer";
import SkillProvider from "./context/skillContext";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Lucas Gama</title>
        <meta name="description" content='Portfolio do Lucas Gama' />
        <meta name="author" content='Lucas Gama' />
      </head>
      <StyledComponentsRegistry >
        <body className="container">
          <Navigation />
          <SkillProvider >
            {children}
          </SkillProvider>
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
