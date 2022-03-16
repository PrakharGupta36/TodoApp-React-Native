import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function AddTodo() {
  

  const changeHandler = () => {};

  return (
    <View>
      <TextInput placeholder='Add task' onChangeText={changeHandler} />
    </View>
  );
}
