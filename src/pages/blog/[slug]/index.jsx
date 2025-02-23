import { AlignJustify } from "lucide-react";
import axios from "./../../../utils/axios";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const articles = await axios.get(
    "api/articles?filters[slug][$req]=" + slug + "&populate=*"
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
  const router = useRouter();
  console.log(article);
  return (
    <>
      <div
        className="container mx-auto pt-36"
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
          <h3 className="text-gray-500 mb-10 font-bold text-xl text-center flex gap-6 justify-center">
            {article.categories.map((category, i) => (
              <>
                {i > 0 && "|"} <span>{category.name}</span>
              </>
            ))}
          </h3>
          <h1 className="text-4xl font-bold mb-10 text-center">
            {article.title}
          </h1>
        </div>
        <h6></h6>
        <div className="bg-yellow-300 h-96"></div>

        <p
          style={{
            fontSize: "1.4em",
            textAlign: "justify",
          }}
          className="my-20"
        >
          <ReactMarkdown>{article.description}</ReactMarkdown>
        </p>
      </div>
    </>
  );
}
