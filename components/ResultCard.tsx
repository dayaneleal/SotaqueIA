import { Text, View } from "react-native";
import Markdown from "react-native-markdown-display";
import { markdownStyles, styles, theme } from "./styles";

interface ResultCardProps {
    result: string;
}

export default function ResultCard({ result }: ResultCardProps) {
    return (
        <View style={styles.resultCard}>
            <Text style={theme.typography.resultTitle}>Resultado</Text>
            <Markdown style={markdownStyles}>{result}</Markdown>
        </View>
    );
}
