import "../globals.css";
import Header from "@/components/Layout/header";
import Footer from "@/components/Layout/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import Loading from "./loading";
import type { Metadata } from "next";
import { Bowlby_One, Architects_Daughter } from "next/font/google";
import InfoBar from "@/components/Layout/InfoBar";

const bowlbyOne = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bowlby",
});

const architectsDaughter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-architects",
});

export const metadata: Metadata = {
  title: "Rettungsanker-Freiburg",
  description: "die kiezkneipe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${bowlbyOne.variable} ${architectsDaughter.variable}`}
      >
        <body className="">
          <Header />
          <InfoBar />
          <main className="">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
