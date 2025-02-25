import Link from "next/link";
import timeAgo from "@/utils/timeAgo";

export default function CardBlog({ article, className, isRecommend }) {
  const colors = [
    "bg-purple-400",
    "bg-pink-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-indigo-400",
    "bg-teal-400",
    "bg-orange-400",
  ];

  const baseURL = "/api/img?slug=";
  return (
    <Link href={`/blog/${article?.slug}`}>
      <div
        className={"rounded-lg shadow-sm overflow-hidden " + className}
        style={{
          background: "rgb(255, 255, 255, 0.4)",
        }}
      >
        <div className={isRecommend ? "h-[360px]" : "h-44"}>
          <img
            src={baseURL + article?.slug}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="p-5">
          <h6 className="font-bold mt-1 text-md text-blue-600">
            {article?.title.substr(0, 40)}
            {article?.title.length > 40 && ".."}
          </h6>

          {article?.categories.map((category, i) => {
            const color = colors[i % colors.length];
            return (
              <span
                key={category?.id}
                className={`${color} px-2 py-1 rounded text-xs mr-2`}
              >
                {category?.name}
              </span>
            );
          })}

          <p
            className={
              (!isRecommend ? "hidden" : "") + " my-3 text-sm md:block"
            }
          >
            {article?.description?.substr(0, isRecommend ? 500 : 100)}{" "}
            {article?.description?.length > (isRecommend ? 500 : 100) && ".."}
          </p>
          <div>
            <i className="text-sm">
              <i className="far fa-clock"></i> {timeAgo(article?.createdAt)}
            </i>
          </div>
        </div>
      </div>
    </Link>
  );
}
