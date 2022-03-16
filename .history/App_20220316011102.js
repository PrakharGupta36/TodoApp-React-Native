import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TextInput,
} from "react-native";
import { React, useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("shaun");
  const [age, setAge] = useState(40);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Enter Name : </Text>
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.input}
          placeholder='e.g Jon Doe'
          onChangeText={(e) => {setName(e.ta)}}
        />
      </View>
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
  input: {
    backgroundColor: "white",
    borderRadius: 2.5,
    padding: 2,
    color: "black",
  },
});
