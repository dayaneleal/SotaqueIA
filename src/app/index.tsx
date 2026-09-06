import { useState } from "react";
import MainScreen from "../../components/MainScreen";
import { generator } from "../../service/ai/generator";

export interface Language {
  id: string;
  label: string;
}

const languages: Language[] = [
  { id: "en", label: "Inglês" },
  { id: "de", label: "Alemão" },
  { id: "fr", label: "Francês" },
];

export default function Index() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async (prompt: string, language: string) => {
    if (!prompt.trim()) {
      setResult("");
      setError("Digite uma frase antes de buscar.");
      return;
    }

    setError("");
    setResult("");
    setIsLoading(true);

    try {
      const generatedResult = await generator(prompt, language);
      setResult(generatedResult);
    } catch (requestError) {
      setResult("");
      const message = requestError instanceof Error
        ? requestError.message
        : "Não foi possível gerar o resultado.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainScreen
      languages={languages}
      result={result}
      error={error}
      isLoading={isLoading}
      onGenerate={handleGenerate}
    />
  );
}
