import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getQuoteConsultation = async (userQuery: string): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `
      You are "NR Assistant", a helpful and professional sales consultant for "NR Industries", a convection and apparel manufacturing company in Indonesia.
      
      Your Role:
      1. Answer questions about fabrics (Cotton Combed, Drift, Lacoste, Fleece, Canvas, etc.).
      2. Provide rough estimated price ranges in Indonesian Rupiah (IDR) if asked (e.g., T-shirts 50k-80k depending on qty). Always emphasize that final prices depend on quantity and design complexity.
      3. Explain the process: Design -> Sample -> Production -> Delivery.
      4. Always be polite, professional, and encourage the user to click the "WhatsApp" button for a final fixed quote.
      5. Do not hallucinate orders. You are just a consultant.
      6. Keep answers concise (under 150 words) and easy to read.

      Services we offer:
      - T-Shirts (Kaos Sablon)
      - Polo Shirts (Wangky)
      - Jackets (Hoodie, Bomber, Varsity)
      - Uniforms (Kemeja Kerja, PDH, PDL)
      - Sportswear (Jersey)
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Gagal menghubungi asisten AI.");
  }
};