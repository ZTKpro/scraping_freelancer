require("dotenv").config();

const fs = require("fs");

const rl = require("./helpers/readline");
const makeRequest = require("./utils/openai");

const { scrapeData, postOffer } = require("./pages/useme");
const messagePrompt = require("./prompts/message");

const saveFile = (payload) => {
  const formattedData = `${payload.link}\n\n\n${payload.content}`;

  fs.writeFile(`./outputs/${payload.id}.txt`, formattedData, (err) => {
    if (err) throw err;
    console.log("File is saved!");
  });
};

async function main() {
  const urlPage = process.argv[2] || 1;
  const urlType = process.argv[3] || "it";

  const urls = {
    it: `https://useme.com/pl/jobs/category/programowanie-i-it,35/?page=${urlPage}`,
    web: `https://useme.com/pl/jobs/category/serwisy-internetowe,34/?page=${urlPage}`,
  };

  const pageUrl = urls[urlType];
  console.log(`Scrap link: ${pageUrl}`);

  const scrap = await scrapeData(pageUrl);

  console.log(scrap);
  console.log();
  rl.question("Give a number of choosen offert: \n", async (answer) => {
    if (!answer) {
      console.log("No answer provided, skipping...");
      return;
    }
    const ids = answer.split(",").map((id) => {
      const model = id.endsWith("-") ? "gpt-4" : "gpt-3.5-turbo";
      return { id: Number(id.replace("-", "")), model };
    });

    const selectedItems = scrap.filter((item) =>
      ids.find((id) => id.id === item.id)
    );

    console.log(selectedItems);
    const promises = selectedItems.map(async (item) => {
      const payload = {
        id: item.offertId,
        content: "",
        link: "",
      };
      const copyToAI = messagePrompt(item.content);

      console.log(payload.content);

      console.log();
      console.log(item.title);
      console.log();
      console.log(item.content);
      console.log();

      payload.link = `useme.com/pl/jobs/${payload.id}/post-offer/`;

      const model = ids.find((id) => id.id === item.id).model;
      const response = await makeRequest(copyToAI, model);
      payload.content = response;

      console.log(payload);

      console.log("Zatwierdzono");

      saveFile(payload);

      console.log();
    });

    await Promise.all(promises);

    console.log("\x1b[35m%s\x1b[0m", "Wszystkie obietnice zostały zakończone.");
  });
}

main();
