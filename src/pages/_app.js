import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import CursorFollower from "@/components/cursorFollower";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable}`}>
      <Navbar />
      <CursorFollower />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
