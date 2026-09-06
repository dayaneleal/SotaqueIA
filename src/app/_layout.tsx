import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="index"
      options={{
        title: "SotaqueIA",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#111",
        },
      }} /></Stack>;
}
