import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

const GameScreen = ({ userNumber }) => {
  function generateRandomBetween(min, max, exclude) {
    const randNum = Math.floor(Math.random() * (max - min) + min);

    if (randNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return randNum;
    }
  }

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton>+</PrimaryButton>
          <PrimaryButton>-</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 100,
  },
});
