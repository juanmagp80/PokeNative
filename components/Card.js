import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const { height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: height * 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1b1b",
    borderRadius: 20,
    marginRight: "4%",
    marginLeft: "1%",
    marginBottom: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 8,
    shadowRadius: 3.84,
    elevation: 7,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  name: {
    color: "black", //"#fff
    fontSize: 20,
    fontWeight: "bold",
  },
  number: {
    color: "black", //"#fff"
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default function Card({ pokemon }) {
  const getPokemon = async ({ queryKey }) => {
    const res = await fetch(queryKey[1]);
    return res.json();
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["getPokemon", pokemon?.url],
    queryFn: getPokemon,
  });
  const colors = {
    grass: "#c4e4d4",
    poison: "#c183c1",
    fire: "#fddfdf",
    flying: "#c6def6",
    water: "#9db7f5",
    bug: "#c6d16e",
    normal: "#c6c6a7",
    electric: "#fae078",
    ground: "#f4e7da",
    fairy: "#fceaff",
    fighting: "#d67873",
    psychic: "#fa92b2",
    rock: "#d1c17d",
    steel: "#d1d1e0",
    ice: "#bce6e6",
    ghost: "#a292bc",
    dragon: "#a27dfa",
    dark: "#a29288",
  };
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors[data?.types[0]?.type?.name] },
      ]}
    >
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
