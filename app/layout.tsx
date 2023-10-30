import "./globals.css";
import "../assets/mdi/css/materialdesignicons.min.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Lexo Bank Home",
  description: "Discover world's seamless banking experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/lexo-Bank-logo-lighrt-blue.png" />
      </head>
      <body className="text__dark relative">{children}</body>
    </html>
  );
}
