export function Header() {
  return (
    <div className="hidden md:block">
      <div
        style={{
          background: "rgba(69, 66, 255, 0.7)",
          height: "100px",
          width: "100px",
          borderRadius: "100%",
          boxShadow: "0 0 400px 150px rgba(69, 66, 255, 0.9)",
          filter: "blur(20px)",
        }}
      ></div>

      <div
        style={{
          background: "rgba(69, 66, 255, 0.4)",
          height: "100px",
          width: "100px",
          borderRadius: "100%",
          boxShadow: "0 0 400px 150px rgba(69, 66, 255, 0.6)",
          filter: "blur(20px)",
          position: "absolute",
          right: 0,
          top: 50,
        }}
      ></div>

      <div className="flex justify-center">
        <div>
          <div
            style={{
              width: "500px",
              height: "500px",
              position: "relative",
              zIndex: 2,
              // opacity: 0.7,
            }}
            className="bg-gradient-to-b from-[#D9D9D9] via-[#7A59FF] to-[#7A59FF] rounded-full"
          ></div>
          <div
            className="flex-col text-right -mt-56 relative pr-8"
            style={{ zIndex: 3 }}
          >
            <div
              className="bg-[#006AFF] py-3 px-10 text-white font-bold text-xl text-center"
              style={{
                borderRadius: "20px",
                display: "inline-block",
                borderBottomRightRadius: 0,
              }}
            >
              Zacky Zalfa F.R.
            </div>
            <br />
            <div
              className="bg-[#48B6FF] py-2 px-8 font-bold text-md text-center text-black"
              style={{
                borderBottomLeftRadius: "10px",
                borderTopLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                display: "inline-block",
              }}
            >
              Web Engineer
            </div>
          </div>
        </div>
        <div
          style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            zIndex: 2,
            opacity: 0.5,
            marginLeft: "100px",
          }}
          className="bg-gradient-to-b from-[#D9D9D9] via-[#7A59FF] to-[#7A59FF] rounded-full"
        ></div>
        <div
          style={{
            width: "500px",
            height: "500px",
            // opacity: 0.7,
            marginLeft: -70,
            marginTop: 70,
          }}
          className="bg-gradient-to-b from-[#D9D9D9] via-[#B617FF] to-[#B617FF] rounded-full overflow-hidden"
        >
          <img
            src="/assets/images/vivi.png"
            alt=""
            // className="mt-4"
            style={{
              height: "500px",
            }}
          />
        </div>
        <div
          className="flex-col ml-64 pl-8 absolute pr-8"
          style={{ zIndex: 30, marginTop: "320px" }}
        >
          <div
            className="bg-[#006AFF] py-3 px-10 text-white font-bold text-xl text-center"
            style={{
              borderRadius: "20px",
              display: "inline-block",
              borderBottomLeftRadius: 0,
            }}
          >
            Felissa Vivian M.
          </div>
          <br />
          <div
            className="bg-[#48B6FF] py-2 px-8 font-bold text-md text-center text-black"
            style={{
              borderBottomLeftRadius: "10px",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              display: "inline-block",
            }}
          >
            Artist & Web Designer
          </div>
        </div>
      </div>
    </div>
  );
}
