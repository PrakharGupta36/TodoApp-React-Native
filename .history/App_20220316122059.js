import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { React, useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState(" Prakhar");
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
  ]);

  const pressHandler = (id) => {
    console.log(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textWhite}> Live Update here 👉 {name} </Text>

      <Text style={styles.textWhite}> Enter Name: </Text>
      <TextInput
        style={styles.input}
        placeholder='Eg Joe Rogan'
        onChangeText={(e) => setName(e)}
      />
      <View style={styles.buttonContainer}>
        <FlatList
          data={people}
          numColumns={2}
          renderItem={({ item }) => {
            return <Text style={styles.text}> {item.name} </Text>;
          }}
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
    borderRadius: 5,
  },
  textWhite: {
    color: "white",
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
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
