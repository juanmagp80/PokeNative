import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { headerStyles as styles } from "../styles";

export default function Header({
  tmp,
  setTmp,

  handleSearch,

  description,
  showSearch,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/splash.png")} />
      <Text style={styles.description}>{description}</Text>
      {showSearch && (
        <TextInput
          value={tmp}
          onChangeText={(text) => setTmp(text)}
          placeholder="Busca un pokémon por nombre o número"
          style={styles.search}
          onEndEditing={() => {
            handleSearch(tmp);
          }}
        />
      )}
    </View>
  );
}
