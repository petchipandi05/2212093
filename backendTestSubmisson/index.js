import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createShortUrl} from "./short.js";
import { urlDatabase } from "./short.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/shorturls", (req, res) => {
  const { url, validity, shortcode } = req.body;
  if (!url) {
    return res.status(400).json({ error: "url is required" });
  }
  const { shortUrl, expiry } = createShortUrl(url, validity, shortcode);
  res.status(201).json({
    shortlink: shortUrl,
    expiry
  });
});

app.get("/shorturls/:code", (req, res) => {
  const { code } = req.params;
  const data = urlDatabase[code];
  if (!data) {
    return res.status(404).json({ error:"URL not found" });
  }
  res.json({
    totalClicks: data.clicks.length,
    originalUrl: data.originalUrl,
    createdAt: data.createdAt.toISOString(),
    expiry: data.expiry.toISOString(),
    clicks: data.clicks,
  });
});

app.listen(3000, () => {
  console.log("backend is running");
});