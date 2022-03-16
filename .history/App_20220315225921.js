import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style='auto' />
      </View>
      <View style = {}>

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
    backgroundColor: "#1f1f1f"
  },
  header: {
    "backgroundColor": "pink",
  },
  boldText: {
    fontWeight: "bold"
  }

});
