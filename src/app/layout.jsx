import { Inter } from "next/font/google";
import "../../styles/globals.css";
import ReduxProvider from "../store/providers/reduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "File Explorer",
  description: "Mac OS File Explorer",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </ReduxProvider>
  );
}
