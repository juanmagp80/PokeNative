import { Text, View, FlatList, StyleSheet, RefreshControl } from "react-native";
import React from "react";
import Card from "../components/Card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
const GET_ALL_URL = "https://pokeapi.co/api/v2/pokemon";
const styles = StyleSheet.create({
  container: {
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: 20,

    flex: 1,
    backgroundColor: "#fff",
  },
});

export default function Home() {
  const getAllPokemon = async ({ pageParam = 1 }) => {
    const res = await fetch(`${pageParam === 1 ? GET_ALL_URL : pageParam}`);
    return res.json();
  };
  const { data, isLoading, hasNextPage, fetchNextPage, isFetching, error } =
    useInfiniteQuery({
      queryKey: "getAllPokemon",
      queryFn: getAllPokemon,
      getNextPageParam: (lastPage) => {
        if (lastPage.next !== null) {
          return lastPage.next;
        }
        return lastPage;
      },
    });
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
      <Header />
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
    </SafeAreaView>
  );
}
