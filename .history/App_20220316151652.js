import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import { React, useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import Header from "./components/Header";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import TodoItem from "./components/Todoitem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text) => {
    
  }

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
          <AddTodo />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
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
});
