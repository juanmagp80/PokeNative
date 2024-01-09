import React, { useContext } from "react";
import { FlatList } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import { FavoritesContext } from "../context";
import { favoritesStyles as styles } from "../styles";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Favoritos"
        description="Aqui puedes ver tus pokémons favoritos"
      />
      <FlatList
        data={favorites}
        renderItem={({ item }) => <Card pokemon={item} />}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
