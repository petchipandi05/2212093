
import crypto from "crypto";
let urlDatabase = {};

function generateShortCode() {
  return crypto.randomBytes(3).toString("hex");
}

export function createShortUrl(longUrl, validity = 30, shortcode = null) {
  if (!shortcode) {
    shortcode = generateShortCode();
  }
  const createdAt = new Date();
  const expiryDate = new Date();
  expiryDate.setMinutes(expiryDate.getMinutes() + validity);

  const shortUrl = `http://localhost:3000/${shortcode}`;
  urlDatabase[shortcode] = {
    originalUrl: longUrl,
    createdAt,
    expiry: expiryDate,
    clicks: [] 
  };
  return { shortUrl, expiry: expiryDate };
}
export { urlDatabase };
