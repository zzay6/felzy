import { Header } from "@/components/Header";
import { KnowYourSelf } from "@/components/KnowYourSelf";
import { Layout } from "@/components/Layout";
import { TopBlog } from "@/components/TopBlog";
import { We } from "@/components/We";
import axios from "@/utils/axios";

export async function getServerSideProps() {
  const global = await axios.get("api/global?populate=favicon");
  const articles = await axios.get("api/articles?populate=*", {});
  return {
    props: {
      title: "Felzy",
      description: "Blog, portfolio, and tech insights",
      global: global.data?.data,
      articles: articles.data?.data,
    },
  };
}

export default function Home({ articles, global }) {
  return (
    <Layout global={global}>
      <Header />
      {/* <div
        style={{
          marginTop: "290px",
        }}
        className="text-center w-full"
      >
        <div
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
        ></div>
      </div> */}

      <TopBlog articles={articles} />
      <KnowYourSelf />
      <We />
    </Layout>
  );
}
