import Link from "next/link";
import timeAgo from "@/utils/timeAgo";

export default function CardSide({ article, className, isRecommend }) {
  const colors = [
    "bg-purple-600",
    "bg-pink-600",
    "bg-blue-600",
    "bg-yellow-600",
    "bg-indigo-600",
    "bg-teal-600",
    "bg-orange-600",
  ];

  const baseURL = "/api/img?slug=";
  return (
    <Link href={`/blog/${article.slug}`}>
      <div
        className={"flex overflow-hidden hover:bg-gray-100 p-4 rounded " + className}
        style={
          {
            transition: 'all 0.6s'
            //   background: "rgb(255, 255, 255, 0.3)",
          }
        }
      >
        <div className={"w-48"}>
          <img
            src={baseURL + article.slug}
            className="h-full w-full object-"
            alt=""
          />
        </div>
        <div className="pl-5">
          <h6 className="font-bold mt-1 text-md text-blue-600">
            {article.title.substr(0, 60)}
            {article.title.length > 60 && ".."}
          </h6>

          <i className="text-sm">
            <i className="far fa-clock"></i> {timeAgo(article.createdAt)}
          </i>
        </div>
      </div>
    </Link>
  );
}
