require("dotenv").config(); // ✅ LOAD ENV

const express = require("express");
const puppeteer = require("puppeteer-core");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/browse", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL required" });
  }

  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_KEY}`
    });

    const page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 800 });

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
    );

    // ✅ FIXED URL
    let finalUrl = url;
    if (!url.startsWith("http")) {
      finalUrl = "https://www." + url;
    }

    console.log("Opening:", finalUrl);

    await page.goto(finalUrl, {
      waitUntil: "networkidle2",
      timeout: 30000
    });

    const screenshot = await page.screenshot({
      fullPage: true,
      encoding: "base64"
    });

    await browser.close();

    res.json({ image: screenshot });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load page" });
  }
});

app.listen(3001, () => {
  console.log("✅ Server running on http://localhost:3001");
});