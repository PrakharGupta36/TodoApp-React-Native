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
  
})