import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Title from "../components/Title.ios";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({
  startNewGame,
  totalGuesses,
  guessNumber,
}: {
  startNewGame: () => void;
  totalGuesses: number;
  guessNumber: number;
}) {
  const handleNewGame = () => {
    startNewGame();
  };

  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
      <View>
        <Image
          source={require("../../assets/images/Success.png")}
          style={[height < width ? styles.imageStyle_L : styles.imageStyle]}
        />
      </View>
      <Text style={styles.message}>
        Total rounds taken by phone to guess number {guessNumber} is{" "}
        {totalGuesses}
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={handleNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  imageStyle: {
    width: 300,
    height: 300,
    margin: 10,
    borderRadius: 150,
    alignSelf: "center",
  },
  imageStyle_L: {
    width: 100,
    height: 100,
    borderRadius: 150,
    alignSelf: "center",
  },
  message: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: 200,
    height: 50,
    alignSelf: "center",
  },
});
