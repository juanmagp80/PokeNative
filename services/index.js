import { GET_ALL_URL } from "../constants";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const getAllPokemon = async ({ pageParam = 1, queryKey }) => {
  const type = queryKey[1];
  const res = await fetch(
    `${pageParam === 1 ? `${GET_ALL_URL}?type=${type}` : pageParam}`
  );
  return res.json();
};
export function useGetAllPokemon() {
  const [type, setType] = useState(null);
  return useInfiniteQuery({
    queryKey: ["getAllPokemon", type],
    queryFn: getAllPokemon,
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }
      return lastPage;
    },
  });
}

const getPokemon = async ({ queryKey }) => {
  const res = await fetch(`${GET_ALL_URL}/${queryKey[1]}`);
  return res.json();
};
const getDetails = async ({ queryKey }) => {
  const res = await fetch(queryKey[1]);
  return res.json();
};
export function useGetDetails(pokemon) {
  return useQuery({
    queryKey: ["getPokemon", pokemon?.url],
    queryFn: getDetails,
  });
}

export function useGetPokemon(search) {
  return useQuery({
    queryKey: ["getPokemon", search],
    queryFn: getPokemon,
    enabled: !!search,
  });
}
