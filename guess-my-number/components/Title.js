import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
// return (
//     <View>
//         <Text>Hello</Text>
//     </View>
// )
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    padding: 12,
    margin: 5
  },
});
