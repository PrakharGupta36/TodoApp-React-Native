import { StyleSheet, Text, View, StatusBar } from "react-native";
import {usS}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, delectus!{" "}
      </Text>
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
});