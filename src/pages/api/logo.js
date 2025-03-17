import axios from "@/utils/axios";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET")
      return res.status(405).json({ message: "Method Not Allowed" });

    const global = await axios.get("api/global?populate=favicon");
    const url = global.data.data?.favicon?.formats?.small?.url;

    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });

    const contentType = response.headers["content-type"] || "image/png";
    res.setHeader("Content-Type", contentType);

    res.send(Buffer.from(response.data));
  } catch (error) {
    console.error("Error fetching image:", error.message);
    res.status(500).json({ message: "Failed to fetch image" });
  }
}
