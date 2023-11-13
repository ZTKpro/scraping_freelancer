const puppeteer = require("puppeteer");

const cookies = require("../env");

const compressText = require("../utils/compressText");

const compressData = (array) =>
  array.map((item) => {
    return {
      ...item,
      content: compressText(item.content),
    };
  });

const scrapeData = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    let scrapData = await page.evaluate(() => {
      const getIdOffert = (link) => {
        const splitedLink = link.split(",");
        const ifOffert = splitedLink[1].split("/")[0];
        return ifOffert;
      };
      let data = [];
      const links = document.querySelectorAll(".job__title-link");
      const contents = document.querySelectorAll(".job__content");
      for (let i = 0; i < links.length; i++) {
        data.push({
          id: i,
          offertId: getIdOffert(links[i].href),
          link: links[i].href,
          title: links[i].textContent,
          content: contents[i].textContent,
        });
      }
      return data;
    });

    let compressedData = compressData(scrapData);

    for (let i = 0; i < scrapData.length; i++) {
      if (compressedData[i].content.endsWith("...")) {
        await page.goto(scrapData[i].link);
        compressedData[i].content = await page.evaluate(() => {
          return document.querySelector(".job-details__main-desc").textContent;
        });
      }
    }

    await browser.close();
    return compressData(compressedData);
  } catch (error) {
    console.error(error);
  }
};
const postOffer = async (payload) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = `https://useme.com/pl/jobs/${payload.id}/post-offer/`;
  console.log(cookies);

  await page.setCookie(...cookies);

  await page.goto(url);
  console.log(`Connecting to ${url}`);

  try {
    const ids = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("*"))
        .map((el) => el.id)
        .filter(Boolean);
    });

    // console.log("Available IDs:", ids);
    await page.waitForSelector("#id_description");
    await page.waitForSelector("#id_payment");
    await page.waitForSelector("#id_work_days");
    await page.waitForSelector("button[type=submit]");

    const changes = await page.evaluate((payload) => {
      let data = [];

      const descriptionElement = document.getElementById("id_description");
      if (descriptionElement) descriptionElement.value = payload.content;

      return descriptionElement.value;
    }, payload);

    console.log(changes);
    console.log("\x1b[32m%s\x1b[0m", "SENDED");
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await browser.close();
  }
};

module.exports = {
  scrapeData,
  postOffer,
};
