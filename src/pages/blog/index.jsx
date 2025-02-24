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

export default function Blog({ articles }) {
  return (
    <>
      <div
        className="container mx-auto pt-28 px-4"
        style={{
          maxWidth: "1000px",
        }}
      >
        <h1 className="text-2xl font-bold mb-10 text-center">JELAJAHI BLOG</h1>
        <div className="grid grid-cols-3">
          {articles.map((article) => (
            <CardBlog article={article} className="mb-5" />
          ))}
        </div>
      </div>
    </>
  );
}
