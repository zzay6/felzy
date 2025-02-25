import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearcInput() {
  const placeholders = [
    "Cari sesuatu...",
    "AI...",
    "Machine Learning...",
    "Web Development...",
    "Data Science...",
    "Web Design...",
  ];
  const router = useRouter();
  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typing, setTyping] = useState(false);
  const [suggests, setSuggests] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const currentText = placeholders[index];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % placeholders.length);
    }

    const timer = setTimeout(() => {
      setPlaceholder(currentText.substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, placeholders]);

  const querySearch = async (e) => {
    if (e.keyCode == 13) {
      router.push("/blog?keyword=" + e.target.value);
    } else {
      setKeyword(e.target.value);
      e.target.value.length > 0 ? setTyping(true) : setTyping(false);
      const result = await axios.get("/api/search?keyword=" + e.target.value);
      setSuggests(result.data.data);
    }
  };

  return (
    <>
      <input
        type="text"
        className="block text-lg outline-none py-3 w-full ml-auto"
        placeholder={placeholder}
        onKeyUp={(e) => querySearch(e)}
        // onPointerLeave={(e) => setTyping(false)}
        style={{
          background: "none",
          maxWidth: "500px",
          borderBottom: "1px solid rgb(184, 183, 245)",
        }}
      />
      {typing && (
        <div
          className="max-h-60 absolute mt-2 shadow rounded p-5 md:w-full overflow-y-auto"
          style={{
            maxWidth: "500px",
            background: "rgb(233, 237, 255)",
          }}
        >
          {suggests.length ? (
            suggests.map((suggest) => {
              const regex = new RegExp(`(${keyword})`, "gi");
              const parts = suggest.title.split(regex);

              return (
                <Link
                  key={suggest.title}
                  href={"/blog?keyword=" + suggest.title}
                  className="hover:text-blue-400 text-gray-600 mb-3 w-full block"
                >
                  {parts.map((part, index) =>
                    part.toLowerCase() === keyword.toLowerCase() ? (
                      <span key={index} className="text-blue-600 font-bold">
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </Link>
              );
            })
          ) : (
            <p className="text-center text-gray-600 text-sm">
              <i>Tidak ada saran</i>
            </p>
          )}
        </div>
      )}
    </>
  );
}
