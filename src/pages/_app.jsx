import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CursorFollower from "@/components/cursorFollower";
import { Inter } from "next/font/google";

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
