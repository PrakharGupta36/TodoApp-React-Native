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
import AppLoading from "expo-app-loading";
import Header from "./components/Header";
import { useFonts, Inter_400Black } from "@expo-google-fonts/inter";


export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* To Do Form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Text style={styles.text}> {item.text} </Text>
            )}
          />
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize:20,
  },
});
