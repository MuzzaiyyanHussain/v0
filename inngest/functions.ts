import { inngest } from "./client";
import { gemini, createAgent } from "@inngest/agent-kit"

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "agent/hello" },
  async ({ event, step }) => {
    const helloAgent = createAgent({
      name: "Hello Agent",
      description: "a simple agent that says hello",
      system: "You are a helpful assistant that greets with enthusiasm",
      model: gemini({ model: "gemini-2.5-flash" })
    })
    try {
      const result = await helloAgent.run("Say hello to the user");

      const textMessage = result.output.find(
        (msg) => msg.type === "text"
      );

      return {
        message: textMessage?.content ?? "Hello!",
      };
    } catch (err) {
      console.error("FULL GEMINI ERROR =>", err);
      throw err;
    }
  },
);


