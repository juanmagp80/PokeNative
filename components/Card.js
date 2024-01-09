import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { cardStyles as styles } from "../styles";
import { FavoritesContext } from "../context";
import { colors } from "../constants";
import { useGetDetails } from "../services";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Card({ pokemon }) {
  const { favorites, addFavorite } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const { data, isLoading, error } = useGetDetails(pokemon);

  useEffect(() => {
    async function getStatus() {
      const find = favorites.filter((elem) => elem.name === pokemon.name);
      if (find.length > 0) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }

    getStatus();
  }, [favorites, pokemon.name]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors[data?.types[0]?.type?.name] },
      ]}
    >
      <TouchableOpacity onPress={() => addFavorite(pokemon)}>
        {isFavorite && <Icon name="heart" size={40} color="red" />}
        {!isFavorite && <Icon name="heart-outline" size={40} color="white" />}
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: data?.sprites?.other["official-artwork"]?.front_default,
        }}
      />

      <Text style={styles.name}>{data?.name}</Text>
      <Text style={styles.number}>Número {data?.id}</Text>
      <Text style={styles.number}>{data?.height}KG</Text>
    </SafeAreaView>
  );
}
