require("dotenv").config();

const cp = require("copy-paste");
const puppeteer = require("puppeteer");

const makeRequest = require("./utils/openai");
const messagePrompt = require("./prompts/message");
const compressText = require("./utils/compressText");

const compressData = (array) =>
  array.map((item) => {
    return {
      ...item,
      content: compressText(item.content),
    };
  });

const scrap = async () => {
  const url = process.argv[2];
  const openaiModel = process.argv[3] ? "gpt-4" : "gpt-3.5-turbo";

  if (!process.argv[2]) {
    console.log("Wrong parameters");
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const content = await page.evaluate(() => {
      return document.querySelector(".job-details__main-desc").textContent;
    });

    console.log(content);
    if (content) {
      const copyToAI = messagePrompt(content);
      const response = await makeRequest(copyToAI, openaiModel);

      console.log("\x1b[35m%s\x1b[0m", `Copy AI response`);
      console.log(response);
      cp.copy(response);
    }

    await browser.close();
  } catch (error) {
    console.error(error);
  }
};

scrap();
