import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TodoItem(props) {
  const { item } = props;
  return (
    <TouchableOpacity>
      <Text> {item.text} </Text>
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
    bo
  }
})
