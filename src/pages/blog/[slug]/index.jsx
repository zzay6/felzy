import axios from "@/utils/axios";
import Content from "@/components/Content";
import Link from "next/link";

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const articles = await axios.get(
    "api/articles?filters[slug]=" + slug + "&populate=*"
  );
  return {
    props: {
      title: "Felzy",
      description: "Blog, portfolio, and tech insights",
      article: articles.data.data[0],
    },
  };
}

export default function Page({ article }) {
  const baseURL = "/api/img?slug=";
  return (
    <>
      <div
        className="container mx-auto pt-28 px-4"
        style={{
          maxWidth: "1000px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
          }}
          className="mx-auto"
        >
          <h3 className="text-gray-500 mb-10 font-bold text-xl text-center flex justify-center">
            {article.categories.map((category, i) => (
              <Link href={"/category/" + category.slug}>
                {i > 0 && "|"}
                <span className="px-4 hover:text-gray-700">
                  {category.name}
                </span>
              </Link>
            ))}
          </h3>
          <h1 className="text-2xl font-bold mb-10 text-center">
            {article.title}
          </h1>
        </div>
        <h6></h6>

        <img src={baseURL + article.slug} className="w-full" alt="" />

        <div
          style={{
            fontSize: "1.1em",
          }}
          className="my-10"
        >
          <Content content={article.content} />
        </div>
      </div>
    </>
  );
}
