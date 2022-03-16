import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput,Button } from "react-native";

export default function AddTodo() {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Enter task'
        onChangeText={(e) => setText(e)}
      />
      <Button title="Add Todo" color="coral" onPress={ }`/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Poppins_400Regular",
  },
});
