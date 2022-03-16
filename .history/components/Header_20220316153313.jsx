import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Taskify</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 75,
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: "#0DD599",
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Poppins_400Regular",
    color: "#fff",
  },
});
