import axios from "@/utils/axios";

export default async function handler(req, res) {
  const { keyword } = req.query;
  const articles = await axios.get(
    "api/articles?filters[title][$containsi]=" + keyword + "&fields=title"
  );
  res
    .status(200)
    .json({ message: "Success", data: articles?.data?.data || [] });
}
