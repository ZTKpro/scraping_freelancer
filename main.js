const cp = require("copy-paste");
const rl = require("./helpers/readline");

const { scrapeData, postOffer } = require("./pages/useme");
const messagePrompt = require("./prompts/message");

const url = "https://useme.com/pl/jobs/";

async function main() {
  const scrap = await scrapeData(url);

  console.log(scrap);

  rl.question("Give a number of choosen offert: \n", async (answer) => {
    const ids = answer.split(",").map(Number);

    const selectedItems = scrap.filter((item) => ids.includes(item.id));

    console.log(selectedItems);
    for (const item of selectedItems) {
      const payload = {
        id: item.offertId,
        content: "",
        payment: "",
        work_days: "",
      };
      const copyToAI = messagePrompt(item.content);
      cp.copy(copyToAI);
      console.log(
        "%cPrompt copied to clipboard",
        "color: red; font-size: 20px; \n"
      );
      console.log();

      console.log(item.title);
      console.log();
      console.log(item.content);
      console.log();

      await new Promise((resolve) => {
        rl.question("Paste answer here: \n", (answer1) => {
          payload.content = answer1;
          console.log();

          rl.question("Amount: \n", (answer2) => {
            console.log();

            payload.payment = answer2;

            rl.question("Days: \n", (answer3) => {
              console.log();

              payload.work_days = answer3;

              if (payload.work_days < 7) {
                payload.work_days = 7;
              }

              console.log(payload);

              rl.question("Potwierdzenie: \n", async (answer2) => {
                if (answer2.toUpperCase() === "Y") {
                  console.log("Zatwierdzono");
                  await postOffer(payload);
                } else if (answer2.toUpperCase() === "N") {
                  console.log("Nie zatwierdzono");
                } else {
                  console.log("Nieznana odpowiedź: " + answer2);
                }

                console.log();
                resolve();
              });
            });
          });
        });
      });
    }
  });
}

main();
