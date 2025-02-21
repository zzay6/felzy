import { useState, useEffect } from "react";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none transition-transform duration-75"
      style={{
        transform: `translate(${position.x}px, ${position.y + 100}px)`,
        background: "rgba(72, 182, 255,0.2)",
        height: "50px",
        width: "50px",
        borderRadius: "100%",
        boxShadow: "0 0 400px 150px rgba(72, 182, 255, 0.3)",
        filter: "blur(20px)",
        margin: "0 auto",
        marginTop: "-190px",
      }}
    ></div>
  );
}
