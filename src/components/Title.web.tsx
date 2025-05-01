import { StyleSheet, Text, View } from "react-native";

export default function Title({ children }: { children: any }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 40,
    padding: 3,
    margin: 20,
  },
  titleText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    padding: 5,
  },
});
