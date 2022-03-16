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
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
  ]);

  return (
    <View style={styles.container}>
      {people.map((i, index) => {
        return (
          <Text style={styles.text} key={index}>
            {i.name}
          </Text>
        );
      })}
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
    backgroundColor: "pink",
    padding: 10,
    width: ;
  },
  buttonContainer: {
    margin: 20,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 2.5,
    padding: 5,
    color: "black",
  },
});
