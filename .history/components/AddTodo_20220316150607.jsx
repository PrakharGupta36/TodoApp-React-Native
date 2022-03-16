import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function AddTodo() {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    useState(e);
  };

  return (
    <View>
      <TextInput placeholder='Add task' onChangeText={(e) => ch angeHandler} />
    </View>
  );
}
