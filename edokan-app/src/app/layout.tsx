import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/components/footer';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: "edokan-app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container mx-auto py-4 antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
