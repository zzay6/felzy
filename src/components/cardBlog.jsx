import Link from "next/link";
import removeMarkdown from "remove-markdown";

export default function CardBlog({ article }) {
  return (
    <Link href={`/blog/${article.slug}`}>
      <div
        className="rounded-lg shadow-lg overflow-hidden bg-white"
        style={{ minHeight: "360px", maxWidth: "300px" }}
      >
        <div className="h-44 bg-yellow-50">
          <img src="" className="w-full" alt="" />
        </div>
        <div className="p-5">
          <h6 className="font-bold mt-1 text-xl">{article.title}</h6>
          <p className="my-3">
            {removeMarkdown(article.description.substr(0, 130))}
          </p>
          <span>2 Days Ago</span>
        </div>
      </div>
    </Link>
  );
}
