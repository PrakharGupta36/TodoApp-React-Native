import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import { React, useState, useEffect } from "react";

export default function App() {
  let [name, setName] = useState("Prakhar");
  let [person, setPerson] = useState({ name: "Mario", age: 40 });

  const changeName = () => {
    setName("User");
    setPerson({name:});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}{" "}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title='Update Name' onPress={changeName} />
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
