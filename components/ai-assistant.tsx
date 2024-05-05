import OpenAI from "openai";
const openai = new OpenAI();
 
async function main() { 
  const assistant = await openai.beta.assistants.create({
    name: "{Page Analyzer}",
    instructions: "You are an AI assistant that read and analyze the content of a webpage. You can provide insights on the content, and categorize each section of the page",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-4-turbo"
  });
}
 
main();