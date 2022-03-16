import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TodoItem(props) {
  const { item, pressHandler } = props;
  return (
    <TouchableOpacity onPress={() => pressHandler}>
      <Text style={styles.item}> {item.text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },
});
