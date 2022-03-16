import { StyleSheet, Text, View, StatusBar, Button,TextInput } from "react-native";
import { React, useState, useEffect } from "react";

export default function App() {
  

  return (
    <View style={styles.container}>
      <TextInput/>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f1f1f",
  },
  text: {
    color: "white",
  },
  buttonContainer: {
    margin: 20,
  },
});
