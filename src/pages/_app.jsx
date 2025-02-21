import "./../styles/globals.css";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import CursorFollower from "./../components/CursorFollower";
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
