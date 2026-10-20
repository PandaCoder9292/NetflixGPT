import OpenAI from "openai";
import { OPENROUTER_KEY } from "./constants";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: OPENROUTER_KEY,
  dangerouslyAllowBrowser: true, // Required for running in React frontend
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000", // Required by OpenRouter for browser requests
    "X-Title": "NetflixGPT",
  },
});

export default openai;
