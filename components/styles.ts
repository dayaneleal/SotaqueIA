import { StyleSheet } from "react-native";

const colors = {
    background: '#080B14',
    surface: '#111522',
    border: '#252B3D',

    primary: '#7C3AED',
    primaryLight: '#A855F7',

    text: '#F5F5F7',
    textSecondary: '#A1A6B5',
    textMuted: '#6F7585',
    textError: '#F87171',

    success: '#10B981',
} as const;

export const theme = {
    colors,
    typography: {
        title: {
            color: colors.text,
            fontSize: 36,
            lineHeight: 42,
            fontWeight: '700',
            letterSpacing: -0.8,
        },
        subtitle: {
            color: colors.textSecondary,
            fontSize: 17,
            lineHeight: 26,
            fontWeight: '400',
        },
        fieldLabel: {
            color: colors.text,
            fontSize: 16,
            lineHeight: 22,
            fontWeight: '600',
        },
        highlight: {
            color: colors.text,
            fontWeight: '600',
        },
        highlightPrimary: {
            color: colors.primaryLight,
            fontWeight: '600',
        },
        characterCount: {
            color: colors.textMuted,
            fontSize: 12,
        },
        unselectedButtonText: {
            color: colors.textSecondary,
            fontSize: 15,
            fontWeight: '600',
        },
        buttonText: {
            color: colors.text,
            fontSize: 16,
            fontWeight: '600',
        },
        errorText: {
            color: colors.textError,
            fontSize: 14,
            lineHeight: 20,
        },
        resultTitle: {
            color: colors.primaryLight,
            fontSize: 16,
            fontWeight: '700',
        },
    },

    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },

    radius: {
        sm: 8,
        md: 12,
        lg: 16,
    },
} as const;

export const markdownStyles = {
    body: {
        color: theme.colors.text,
        fontSize: 16,
        lineHeight: 24,
    },
    heading3: {
        color: theme.colors.primaryLight,
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '700' as const,
    },
    blockquote: {
        color: theme.colors.text,
        backgroundColor: theme.colors.background,
        borderLeftColor: theme.colors.primaryLight,
        borderLeftWidth: 3,
        paddingHorizontal: theme.spacing.sm,
    },
    bullet_list: {
        marginVertical: theme.spacing.xs,
    },
    list_item: {
        marginVertical: 2,
    },
    hr: {
        backgroundColor: theme.colors.border,
        height: 1,
        marginVertical: theme.spacing.sm,
    },
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    contentContainer: {
        flexGrow: 1,
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xl,
        gap: theme.spacing.lg,
    },
    section: {
        gap: theme.spacing.sm,
    },
    input: {
        minHeight: 120,
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        borderWidth: 1,
        color: theme.colors.text,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.md,
        borderRadius: theme.radius.sm,
        textAlignVertical: "top",
    },
    characterCount: {
        alignSelf: "flex-end",
    },
    languageOptions: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: theme.spacing.sm,
    },
    languageOption: {
        minWidth: 96,
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.md,
        borderRadius: theme.radius.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.surface,
        alignItems: "center",
    },
    languageOptionSelected: {
        borderColor: theme.colors.primaryLight,
        backgroundColor: theme.colors.primary,
    },
    button: {
        borderRadius: theme.radius.md,
        padding: theme.spacing.md,
        marginTop: theme.spacing.sm,
        backgroundColor: theme.colors.primary,
        alignItems: "center",
    },
    resultCard: {
        gap: theme.spacing.sm,
        padding: theme.spacing.md,
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        borderWidth: 1,
        borderRadius: theme.radius.sm,
    },
});