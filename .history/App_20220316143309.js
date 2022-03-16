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
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.content}>
        {/* To Do Form */}
        <View style={styles.list}>
          <FlatList />
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
