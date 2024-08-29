import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Raleway } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utsav Joshi",
  description: "Generated by create next app",
};

/**
 * Root layout component for the application.
 *
 * @param props - The properties for the component.
 * @param props.children - The child components to render.
 * @returns The root layout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/image/logo.png" /> */}
      </head>
      <body className={raleway.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
