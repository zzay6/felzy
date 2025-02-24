import axios from "@/utils/axios";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET")
      return res.status(405).json({ message: "Method Not Allowed" });

    const { slug } = req.query;
    if (!slug) return res.status(400).json({ message: "Slug is required" });

    const articles = await axios.get(
      "api/articles?filters[slug]=" + slug + "&populate=*"
    );

    const url = articles.data.data[0].cover?.url;

    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });

    const contentType = response.headers["content-type"] || "image/jpeg";
    res.setHeader("Content-Type", contentType);

    res.send(Buffer.from(response.data));
  } catch (error) {
    console.error("Error fetching image:", error.message);
    res.status(500).json({ message: "Failed to fetch image" });
  }
}
