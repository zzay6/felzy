import Link from "next/link";
import CardBlog from "./CardBlog";

export function TopBlog({ articles }) {
  return (
    <div
      className="pl-24 py-20 w-full overflow-x-auto"
      style={{
        marginTop: "-90px",
        margin: "120px 0",
        position: "relative",
        background: "rgb(231, 207, 255, 0.3)",
      }}
    >
      <div className="mx-auto md:flex">
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

          <Link
            href="/blog"
            className="hover:bg-blue-700 cursor-pointer font-bold text-white bg-blue-600 px-6 py-2 rounded-full"
          >
            Baca Disini
          </Link>
        </div>
        <div className="overflow-y-hidden" style={{ height: "440px" }}>
          <div
            style={{ maxWidth: "1800px" }}
            className="w-full flex gap-6 overflow-x-auto pb-5 pl-3 mr-10"
          >
            {articles.map((article) => (
              <CardBlog article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
