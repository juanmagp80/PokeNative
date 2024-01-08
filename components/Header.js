import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    fontFamily: "sans-serif",
    width: "90%",

    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 28,
    color: "black",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
  search: {
    width: "90%",
    marginLeft: "4%",

    height: 40,
    backgroundColor: "#ebf3f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default function Header() {
  return (
    <View>
      <Text style={styles.title}>Pokédex</Text>
      <Text style={styles.description}>
        Busca un pokémon usando su nombre o su número
      </Text>
      <TextInput
        placeholder="Busca un pokémon por nombre o número"
        style={styles.search}
      />
    </View>
  );
}
