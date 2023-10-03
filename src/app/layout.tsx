import { ReactNode } from "react";
import "@/app/globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: "App to test data fetching in Next.j",
  description: "Brett Westwood - Software Engineer",
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
