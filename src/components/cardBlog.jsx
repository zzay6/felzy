import Link from "next/link";
import removeMarkdown from "remove-markdown";
import Content from "./Content";
import timeAgo from "@/utils/timeAgo";

export default function CardBlog({ article }) {
  const colors = [
    "bg-purple-600",
    "bg-pink-600",
    "bg-blue-600",
    "bg-yellow-600",
    "bg-indigo-600",
    "bg-teal-600",
    "bg-orange-600",
  ];

  const baseURL = process.env.NEXT_PUBLIC_STRAPI_BASEURL;
  return (
    <Link href={`/blog/${article.slug}`}>
      <div
        className="rounded-lg shadow-lg overflow-hidden bg-white"
        style={{ minHeight: "360px", maxWidth: "300px" }}
      >
        <div className="h-44 bg-yellow-50">
          <img src={baseURL + article.cover?.url} className="h-full" alt="" />
        </div>
        <div className="p-5">
          <h6 className="font-bold mt-1 text-md text-purple-600">
            {article.title.substr(0, 40)}
            {article.title.length > 40 && ".."}
          </h6>

          {article.categories.map((category, i) => {
            const color = colors[i % colors.length];
            return (
              <span
                key={category.id}
                className={`${color} text-white px-2 py-1 rounded text-xs mr-2`}
              >
                {category.name}
              </span>
            );
          })}

          <p className="my-3 text-sm">
            {article?.description?.substr(0, 100)}{" "}
            {article?.description?.length > 100 && ".."}
          </p>
          <i className="text-sm">
            <i className="far fa-clock"></i> {timeAgo(article.createdAt)}
          </i>
        </div>
      </div>
    </Link>
  );
}
