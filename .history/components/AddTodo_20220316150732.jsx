import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function AddTodo() {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput placeholder='Add task' onChangeText={(e) => setText(e)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: #ddd
  }
})