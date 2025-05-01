import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import GameOverScreen from "./src/screens/GameOverScreen";
import GameScreen from "./src/screens/GameScreen";
import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(<></>);

  const startNewGame = () => {
    setCurrentScreen(<StartGameScreen startGame={startGame} />);
  };

  const startGame = (num: number) => {
    setCurrentScreen(<GameScreen num={num} showResult={showResults} />);
  };

  const showResults = (totalGuesses: number, num: number) => {
    setCurrentScreen(
      <GameOverScreen
        startNewGame={startNewGame}
        totalGuesses={totalGuesses}
        guessNumber={num}
      />
    );
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const { width, height } = useWindowDimensions();

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/images/BackGround.jpg")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backImage}
      >
        <SafeAreaView>
          <View
            style={{
              minHeight: 380,
              maxHeight: 500,
              ...(Platform.OS === "web"
                ? {
                    width: "100%",
                    maxWidth: "50%",
                    alignSelf: "center",
                  }
                : {}),
              marginTop: height > width ? "15%" : 25,
              height: "100%",
            }}
          >
            {currentScreen && currentScreen}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    flex: 1,
    opacity: 0.25,
  },
});
