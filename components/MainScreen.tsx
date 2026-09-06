import { Language } from "@/app";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import LanguageSelector from "./LanguageSelector";
import ResultCard from "./ResultCard";
import { styles, theme } from "./styles";

const MAX_CHARACTERS = 120;

interface MainScreenProps {
  languages: Language[];
  result: string;
  error: string;
  isLoading: boolean;
  onGenerate: (prompt: string, language: string) => Promise<void>;
}

export default function MainScreen({
  languages,
  result,
  error,
  isLoading,
  onGenerate,
}: MainScreenProps) {

  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]?.label || "Inglês");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text
        style={[
          theme.typography.title,
          { color: theme.colors.text },
        ]}
      >
        Fale como um{' '}
        <Text style={{ color: theme.colors.primaryLight }}>
          nativo.
        </Text>
      </Text>
      <Text style={theme.typography.subtitle}>
        Digite uma frase, escolha o idioma e descubra como{' '}
        <Text style={theme.typography.highlightPrimary}>
          pronunciá-la naturalmente
        </Text>
        {' '}usando sons familiares do português brasileiro.
      </Text>
      <View style={styles.section}>
        <Text style={theme.typography.fieldLabel}>
          Digite a sua frase:
        </Text>
        <TextInput
          maxLength={MAX_CHARACTERS}
          multiline
          numberOfLines={4}
          style={styles.input}
          placeholder="O que você quer falar?"
          placeholderTextColor={theme.colors.textMuted}
          value={search}
          onChangeText={setSearch}
        />
        <Text style={theme.typography.characterCount}>
          {search.length}/{MAX_CHARACTERS}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={theme.typography.fieldLabel}>
          Escolha o idioma:
        </Text>
        <LanguageSelector
          languages={languages}
          selectedLanguage={selectedLanguage}
          onSelect={setSelectedLanguage}
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => onGenerate(search, selectedLanguage)}
        disabled={isLoading}
      >
        <Text style={theme.typography.buttonText}>{isLoading ? "Gerando..." : "Buscar"}</Text>
      </Pressable>

      {error ? (
        <Text style={theme.typography.errorText}>{error}</Text>
      ) : result ? (
        <ResultCard result={result} />
      ) : null}

    </ScrollView>
  );
}
