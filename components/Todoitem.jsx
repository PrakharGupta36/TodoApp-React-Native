import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem(props) {
  const { item, pressHandler } = props;
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {" "}
          {item.text} <MaterialIcons name='delete' />{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },
  text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
  },
});
