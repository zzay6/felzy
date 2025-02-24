import Image from "next/image";
import CardBlog from "@/components/CardBlog";
import axios from "@/utils/axios";

export async function getServerSideProps() {
  const articles = await axios.get("api/articles?populate=*", {});
  return {
    props: {
      title: "Felzy",
      description: "Blog, portfolio, and tech insights",
      articles: articles.data?.data,
    },
  };
}

export default function Home({ articles }) {
  return (
    <>
      <div
        style={{
          background: "rgba(69, 66, 255, 0.4)",
          height: "100px",
          width: "100px",
          borderRadius: "100%",
          boxShadow: "0 0 400px 150px rgba(69, 66, 255, 0.6)",
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
          className="bg-gradient-to-b from-[#D9D9D9] via-[#B617FF] to-[#B617FF] rounded-full"
        ></div>
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

      <div
        style={{
          marginTop: "290px",
        }}
        className="text-center w-full"
      >
        {/* <div
          style={{
            background: "rgba(72, 182, 255,0.4)",
            height: "100px",
            width: "100px",
            borderRadius: "100%",
            boxShadow: "0 0 400px 150px rgba(72, 182, 255, 0.6)",
            filter: "blur(20px)",
            margin: "0 auto",
            marginTop: "-190px",
          }}
        ></div> */}
      </div>

      <div
        className="pl-24 py-20 w-full overflow-x-auto"
        style={{
          marginTop: "-90px",
          margin: "120px 0",
          position: "relative",
          background: "rgb(231, 207, 255, 0.3)",
        }}
      >
        <div className="mx-auto flex">
          <div>
            <div>
              <h2 className="text-4xl font-bold mb-4">Blog</h2>
              <div
                style={{ display: "inline-block" }}
                className="px-9 py-1 bg-blue-600 rounded-full"
              ></div>
            </div>
            <h5 className="text-4xl my-20 font-bold pr-10">
              Tulisan Yang Kami Buat
            </h5>

            <a className="hover:bg-blue-700 cursor-pointer font-bold text-white bg-blue-600 px-6 py-2 rounded-full">
              Hubungi Kami
            </a>
          </div>
          <div className="overflow-hidden" style={{ height: "440px" }}>
            <div
              style={{ maxWidth: "1800px" }}
              className="w-full flex gap-10 overflow-x-auto pb-5 pl-3"
            >
              {articles.map((article) => (
                <CardBlog article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Profile Kami</h2>
        <div
          style={{ display: "inline-block" }}
          className="px-14 py-1 bg-blue-600 rounded-full"
        ></div>

        <div
          className="w-full overflow-hidden rounded-xl my-8 flex"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              odit laborum sunt, earum magnam esse quisquam alias vitae neque
              officia, voluptatibus inventore deleniti id itaque ipsum. Magnam
              nam enim voluptas?
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
          ></div>
        </div>
        <div
          className="w-full overflow-hidden rounded-xl my-8 flex"
          style={{
            position: "relative",
            height: "350px",
            background: "rgb(231, 207, 255, 0.3)",
          }}
        >
          <div
            style={{
              width: "500px",
              height: "500px",
              marginTop: "-70px",
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              odit laborum sunt, earum magnam esse quisquam alias vitae neque
              officia, voluptatibus inventore deleniti id itaque ipsum. Magnam
              nam enim voluptas?
            </p>
            <div>
              <a className="hover:bg-blue-700 cursor-pointer font-bold text-white bg-blue-600 px-6 py-2 rounded-full">
                Kenal Lebih
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
