import type { Language } from "@/app";
import { Pressable, Text, View } from "react-native";
import { styles, theme } from "./styles";

interface LanguageSelectorProps {
    languages: Language[];
    selectedLanguage: string;
    onSelect: (language: string) => void;
}

export default function LanguageSelector({
    languages,
    selectedLanguage,
    onSelect,
}: LanguageSelectorProps) {
    return (
        <View style={styles.languageOptions}>
            {languages.map((language) => {
                const isSelected = selectedLanguage === language.label;

                return (
                    <Pressable
                        key={language.id}
                        accessibilityRole="radio"
                        accessibilityState={{ selected: isSelected }}
                        onPress={() => onSelect(language.label)}
                        style={[
                            styles.languageOption,
                            isSelected && styles.languageOptionSelected,
                        ]}
                    >
                        <Text
                            style={[
                                theme.typography.unselectedButtonText,
                                isSelected && theme.typography.buttonText,
                            ]}
                        >
                            {language.label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}
