import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Icon untuk hamburger
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={(scrolling ? "fixed" : "absolute") + ` top-0 w-full z-50 py-3`}
      style={{
        transition: "all 0.8s",
        background: `rgb(22, 25, 71, ${scrolling ? "0.7" : "0"})`,
      }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className={"text-2xl font-bold " + (scrolling && "text-blue-100")}>
          Felzy
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-20 text-gray-700 items-center">
          <Link
            href="/"
            className={
              "text-lg hover:text-blue-600 cursor-pointer font-bold " +
              (scrolling && "text-blue-100")
            }
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={
              "text-lg hover:text-blue-600 cursor-pointer font-bold " +
              (scrolling && "text-blue-100")
            }
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className="text-lg hover:bg-blue-700 cursor-pointer font-bold text-white bg-blue-600 px-6 py-2 rounded-full"
          >
            Hubungi Kami
          </Link>
        </ul>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-16 left-0 w-full shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          background: "rgb(2, 0, 122, 0.3)",
        }}
      >
        <ul className="flex flex-col space-y-4 p-6 text-gray-700">
          <Link
            href={"/"}
            className="hover:text-gray-200 text-white cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/blog"}
            className="hover:text-gray-200 text-white cursor-pointer"
          >
            Blog
          </Link>
          <Link
            href={"/contact-us"}
            className="hover:text-gray-200 text-white cursor-pointer"
          >
            Hubungi Kami
          </Link>
        </ul>
      </div>
    </nav>
  );
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       title: "Felzy",
//       description: "Blog, portfolio, and tech insights",
//     },
//   };
// }
