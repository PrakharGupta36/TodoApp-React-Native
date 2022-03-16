import { StyleSheet, Text, View, StatusBar } from "react-native";
import { React, useState, useEffect } from "react";

export default function App() {
  const [name,setName] = useState("")
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is
      </Text>
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
});
