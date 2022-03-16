import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { React, useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("Prakhar");
  return (
    <View style={styles.container}>
      <Text> Live Update {name} </Text>
      <StatusBar style='auto' />
      <View style={styles.buttonContainer}>
        <Text style={styles.textWhite}> Enter Name: </Text>
        <TextInput style={styles.input} placeholder='Eg Joe Rogan' onChangeText={(e)}/>
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
    paddingTop: 30,
    paddingBottom: 30,
  },
  text: {
    color: "white",
    backgroundColor: "pink",
    padding: 30,
    width: 200,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    borderRadius: 2.5,
  },
  textWhite: {
    color: "white",
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f1f1f",
    paddingTop: 30,
    paddingBottom: 30,
    margin: 20,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 2.5,
    padding: 5,
    color: "black",
    width: 250,
  },
});
