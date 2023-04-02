import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ item, onDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDelete(item.id)}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedIem}
      >
        {/* <Pressable onPress={onDelete.bind(this, item.id)}> */}
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedIem: {
    opacity: 0.5,
  },
});

export default GoalItem;
