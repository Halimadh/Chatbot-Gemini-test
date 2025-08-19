import { GoogleGenerativeAI } from "@google/generative-ai";
const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(geminiApiKey);
const generatonConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  response_mime_type: "application/json",
};
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: generatonConfig,
});
const mainPrompt = `You are a helpful assistant. Answer the user's questions in a friendly and informative manner. If you don't know the answer, say "I don't know."`;

export async function getResponse(inputText: string) {
  const prompt = `${mainPrompt}\nUser: ${inputText}`;
  try {
    const result = await model.generateContent(prompt);
    const response = result.response;

    if (response.candidates && response.candidates.length > 0) {
      const text =
        response.candidates[0].content.parts[0].text?.toString() || "";
      const jsonResponse = JSON.parse(text);
      if (jsonResponse && jsonResponse.response) {
        return jsonResponse.response;
      }
    } else {
      throw new Error("No response from Gemini");
    }
  } catch (error) {
    throw new Error("No response from Gemini");
  }
}
