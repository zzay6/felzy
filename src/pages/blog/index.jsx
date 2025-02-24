import CardBlog from "@/components/CardBlog";
import CardSide from "@/components/CardSide";
import SearcInput from "@/components/SearchInput";
import axios from "@/utils/axios";
import Link from "next/link";

export async function getServerSideProps() {
  const articles = await axios.get(
    "api/articles?populate=*&sort=createdAt:desc",
    {}
  );
  const categories = await axios.get("api/categories?populate=*", {});
  return {
    props: {
      title: "Felzy",
      description: "Blog, portfolio, and tech insights",
      articles: articles.data?.data,
      categories: categories.data?.data,
    },
  };
}

export default function Blog({ articles, categories }) {
  return (
    <>
      <div
        className="container mx-auto pt-28 px-4"
        style={{
          maxWidth: "",
        }}
      >
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl font-bold w-full">JELAJAHI BLOG</h1>
          <div
            className="w-full ml-auto"
            style={{
              maxWidth: "500px",
            }}
          >
            <SearcInput />
          </div>
        </div>
        <div
          style={{
            // background: "rgb(255, 255, 255, 0.6)",
          }}
          className=""
        >
          {categories.map((category) => (
            <Link
              href={"/category/" + category.slug}
              className="text-lg font-bold pr-10"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-6 pt-5">
          <div
            style={{
              widows: "auto",
            }}
          >
            {/* <h1 className="text-3xl font-bold mb-5">Trending!</h1> */}
            {articles[0] && (
              <CardBlog
                article={articles[0]}
                className="mb-5"
                isRecommend={true}
              />
            )}
            <div className="grid grid-cols-3 gap-6">
              {articles.map(
                (article, i) =>
                  i > 0 && <CardBlog article={article} className="mb-5" />
              )}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
            }}
          >
            {articles.map(
              (article, i) =>
                i > 0 && <CardSide article={article} className="" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
