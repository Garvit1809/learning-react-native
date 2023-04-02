import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler, visible, onCancel }) => {
  const [goal, setGoal] = useState("");

  function goalHandler(text) {
    setGoal(text);
  }

  function onAddGoal() {
    addGoalHandler(goal);
    setGoal("");
  }

  return (
    <Modal
      style={styles.modalContainer}
      visible={visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your corse goals!!"
          onChangeText={goalHandler}
          placeholderTextColor="white"
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Tap me" onPress={onAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    marginBottom: 26,
    width: "80%",
    padding: 8,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 16,
  },
  modalContainer: {
    borderWidth: 20,
    borderColor: "black",
  },
});

export default GoalInput;
