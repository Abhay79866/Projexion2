import { GoogleGenAI, Type } from "@google/genai";

// Initialize GoogleGenAI using process.env.API_KEY directly as required by guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getConversionAudit = async (url: string, businessType: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a professional website conversion audit for a ${businessType} business with the website URL: ${url}. 
      Act as a world-class conversion rate optimization (CRO) expert. 
      Analyze common pitfalls for this industry and provide a score out of 100, 3 actionable tips, and a brief summary.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER, description: "A conversion potential score from 0 to 100." },
            tips: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3 highly actionable conversion optimization tips." 
            },
            summary: { type: Type.STRING, description: "A high-level summary of the conversion strategy." }
          },
          required: ["score", "tips", "summary"]
        }
      }
    });

    // Access the .text property directly as it is a getter, not a method.
    const resultText = response.text || '{}';
    return JSON.parse(resultText);
  } catch (error) {
    console.error("Gemini Audit Error:", error);
    throw error;
  }
};