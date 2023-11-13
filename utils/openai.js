const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function makeRequest(prompt, model = "gpt-3.5-turbo") {
  console.log("🔄 Loading...");

  console.log();
  console.log(`${prompt.slice(0, 200)}...`);
  console.log();

  const chatCompletion = await openai.chat.completions.create({
    model: model,
    messages: [{ role: "user", content: prompt }],
  });

  console.log("✅ Done loading.");
  return chatCompletion.choices[0].message.content;
}

module.exports = makeRequest;
