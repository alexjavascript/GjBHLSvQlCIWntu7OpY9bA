import Body from "@/ui/layouts/Body/Body";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Planner | Red Collar",
  description: "Internship Demo Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Body>
        {children}
      </Body>
    </html>
  );
}
