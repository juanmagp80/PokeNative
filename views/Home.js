import {
  Text,
  FlatList,
  RefreshControl,
  Modal,
  Button,
  View,
  TouchableHighlight,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import Card from "../components/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { useQueryClient } from "@tanstack/react-query";
import { homeStyles as styles } from "../styles";
import { modalStyles } from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";

import { pickerStyles } from "../styles";
import { GET_ALL_URL } from "../constants";
import { useGetAllPokemon, useGetPokemon } from "../services";
export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [type, setType] = useState(null);

  const [tmp, setTmp] = useState("");
  const [search, setSearch] = useState(null);
  const queryClient = useQueryClient();
  const handleSearch = (searchValue) => {
    queryClient.removeQueries("getPokemon");
    setSearch(searchValue);
  };

  const {
    data: searchResult,
    isLoading: searchLoading,
    isFetching: searchFetching,
    error: searchError,
  } = useGetPokemon(search);

  const { data, isLoading, hasNextPage, fetchNextPage, isFetching, error } =
    useGetAllPokemon();

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalStyles.modalView}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Selecciona un tipo
          </Text>
          <TouchableHighlight
            onPress={() => {
              setType("fire");
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={{ fontSize: 16 }}>Fuego</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setType("water");
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={{ fontSize: 16 }}>Agua</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setType("grass");
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={{ fontSize: 16 }}>Planta</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setType("electric");
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={{ fontSize: 16 }}>Eléctrico</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setType("psychic");
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={{ fontSize: 16 }}>Psíquico</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setType("ice");
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={{ fontSize: 16 }}>Hielo</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setType("dragon");
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={{ fontSize: 16 }}>Dragón</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setType("dark");
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={{ fontSize: 16 }}>Siniestro</Text>
          </TouchableHighlight>
        </View>
      </Modal>
      <Button
        color="red"
        title="Selecciona un tipo"
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <Header
        title={"Pokedex"}
        description={"Busca tu pokemon favorito"}
        tmp={tmp}
        setTmp={setTmp}
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        showSearch
      />

      {!search ? (
        <FlatList
          data={data?.pages.map((page) => page.results).flat()}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <Card pokemon={item} />}
          numColumns={2}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl
              size="large"
              tintColor="tomato"
              refreshing={isLoading || isFetching}
            />
          }
          refreshing={isLoading || isFetching}
        />
      ) : (
        searchResult && (
          <Card pokemon={{ url: `${GET_ALL_URL}/${searchResult.id}` }} />
        )
      )}

      {searchError && <Text>Pokémon no encontrado</Text>}
      {(searchLoading || searchFetching || isLoading || isFetching) && (
        <Text>Buscando...</Text>
      )}
      {error && <Text>Ha ocurrido un error</Text>}
    </SafeAreaView>
  );
}
