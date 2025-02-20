export default function CardBlog() {
  return (
    <div
      className="rounded-lg shadow-lg overflow-hidden bg-white"
      style={{ minHeight: "360px", minWidth: "300px" }}
    >
      <div className="h-44 bg-yellow-50">
        <img src="" className="w-full" alt="" />
      </div>
      <div className="p-5">
        <h6 className="font-bold mt-1 text-xl">Example Title</h6>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores
          molestias quae ipsam incidunt porro.
        </p>
        <span>2 Days Ago</span>
      </div>
    </div>
  );
}
