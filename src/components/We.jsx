import { useEffect, useState } from "react";

export function We() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateStyles = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", updateStyles);
    return () => window.removeEventListener("resize", updateStyles);
  }, []);

  return (
    <div className="container mx-auto text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Profile Kami</h2>
      <div
        style={{ display: "inline-block" }}
        className="px-14 py-1 bg-blue-600 rounded-full"
      ></div>

      <div
        className="w-full overflow-hidden rounded-xl my-8 md:flex"
        style={{
          position: "relative",
          height: "350px",
          background: "rgb(231, 207, 255, 0.3)",
        }}
      >
        <div
          className="text-left p-16 flex flex-col justify-around"
          style={{
            maxWidth: "1000px",
          }}
        >
          <h5 className="text-3xl font-bold">Felissa Vivian M.</h5>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
            laborum sunt, earum magnam esse quisquam alias vitae neque officia,
            voluptatibus inventore deleniti id itaque ipsum. Magnam nam enim
            voluptas?
          </p>
          <div>
            <a className="hover:bg-blue-700 cursor-pointer font-bold text-white bg-blue-600 px-6 py-2 rounded-full">
              Kenal Lebih
            </a>
          </div>
        </div>
        <div
          style={{
            width: "500px",
            height: "500px",
            marginTop: "-70px",
            marginLeft: "auto",
            transform: "translateX(80px)",
          }}
          className="bg-gradient-to-b from-[#D9D9D9] via-[#B617FF] to-[#B617FF] rounded-full"
        >
          <img
            src="/assets/images/vivi.png"
            alt=""
            className="mt-14 ml-4"
            style={{
              height: "400px",
            }}
          />
        </div>
      </div>
      <div
        className="w-full overflow-hidden rounded-xl my-8 md:flex md:h-[350px]"
        style={{
          position: "relative",
          background: "rgb(231, 207, 255, 0.3)",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "500px",
            marginTop: isMobile ? "-90px" : "-70px",
            transform: "translateX(-80px)",
          }}
          className="bg-gradient-to-b from-[#D9D9D9] via-[#7A59FF] to-[#7A59FF] rounded-full"
        ></div>
        <div
          className="text-left p-16 flex flex-col justify-around"
          style={{
            maxWidth: "1000px",
          }}
        >
          <h5 className="text-3xl font-bold">Zacky Zalfa F.R.</h5>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
            laborum sunt, earum magnam esse quisquam alias vitae neque officia,
            voluptatibus inventore deleniti id itaque ipsum. Magnam nam enim
            voluptas?
          </p>
          <div>
            <a className="hover:bg-blue-700 cursor-pointer font-bold text-white bg-blue-600 px-6 py-2 rounded-full">
              Kenal Lebih
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
