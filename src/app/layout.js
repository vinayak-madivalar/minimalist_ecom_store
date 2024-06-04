import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "@/utils/provider";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Minimalist Store",
  description: "Ecommerce store",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={raleway.className}>{children}</body>
      </html>
    </Providers>
  );
}
