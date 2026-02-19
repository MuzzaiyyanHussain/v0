import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("KEY:", process.env.GOOGLE_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

async function main() {
  const model = genAI.getGenerativeModel({
    model: "models/gemini-2.0-flash",
  });

  const res = await model.generateContent("Hello");
  console.log(res.response.text());
}

main();
