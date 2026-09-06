import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

if (!apiKey) {
    throw new Error("EXPO_PUBLIC_GOOGLE_API_KEY não foi carregada pelo Expo. Reinicie com `npx expo start -c`.");
}

const google = createGoogleGenerativeAI({
    apiKey,
});

export const generator = async (prompt: string, language: string) => {
    try {
        const { text } = await generateText(
            {
                model: google("gemini-3.6-flash"),
                prompt: `Traduza ${prompt} para o idioma ${language}`,
                system: "Você é um assistente de trandução poliglota e especialista em fonética para nativos de português brasileiro. O usuário vai te passar um idioma de destino e uma frase em porutguês. Sua tarefa é traduzir a frase para o idioma escohido (Escrita Real) e gerar a representação fônica dessa tradução usando estritamente as regras de leitura e acentuação da línguia portuguesa, marcando a sílaba mmais forte em negrito. Retorne o resultado dividindo claramente os campos de tradução e representação fônica em seções separadas, com títulos claros para cada seção.",
            }
        )
        return text;
    } catch (error) {
        throw error;
    }
};