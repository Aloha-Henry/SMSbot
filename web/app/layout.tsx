import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIRRA — Court-ready recovery evidence for plaintiff PI firms",
  description:
    "PIRRA turns your client's recovery into court-ready exhibits — captured through natural text messages, structured to evidence standards, every fact traceable to the moment your client said it.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* TODO: analytics */}
        {children}
      </body>
    </html>
  );
}
