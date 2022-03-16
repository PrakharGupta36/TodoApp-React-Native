import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import { React, useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import Header from "./components/Header";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
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
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
});
