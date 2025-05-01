import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({
  children,
  onPress,
}: {
  children: any;
  onPress: any;
}) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ radius: 3 }}
      style={({ pressed }) => pressed && styles.buttonPressed}
    >
      <View style={styles.container}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: "#751c2c",
    width: "100%",
    height: "100%",
    minHeight: 40,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: Platform.select({ ios: 20, android: 18 }),
    fontWeight: "bold",
    textAlign: "center",
    color: Platform.OS === "ios" ? "#ead881" : "#eee2ad",
  },
  buttonPressed: {
    opacity: 0.85,
    backgroundColor: "#5b0e1d",
    borderRadius: 30,
  },
});
