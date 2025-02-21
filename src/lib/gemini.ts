"use server";

// lib/gemini.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Use a singleton pattern to initialize Gemini only once
let geminiInstance: any = null;

const getGeminiInstance = () => {
  if (!geminiInstance) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    geminiInstance = model;
  }
  return geminiInstance;
};

export default getGeminiInstance;
