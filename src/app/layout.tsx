import type { Metadata } from "next";
import "./globals.css";

// HERE IS THE GOOGLE VERIFICATION METADATA MATRIX
export const metadata: Metadata = {
  title: "Vantrix OS - Autonomous AI & Code Architectures",
  description: "Engineering complex cloud automation matrices and distributed artificial networks.",
  verification: {
    google: "haZgO7BfMGKj7FquxZpMbJDcBhyiQGshM4dkWqX3UKg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
