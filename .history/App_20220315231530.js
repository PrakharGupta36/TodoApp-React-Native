import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import { React, useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("Prakhar");


  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update Name' onPress={} />
        <StatusBar style='auto' />
      </View>
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
