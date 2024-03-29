import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FavoritesContext = createContext();

export const Provider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    async function getFavorites() {
      const list = await AsyncStorage.getItem("_favorites");
      if (list) {
        const tmp = JSON.parse(list);
        setFavorites(tmp);
      }
    }
    getFavorites();
  }, []);

  async function updateFavorites() {
    const list = await AsyncStorage.getItem("_favorites");
    if (list) {
      const tmp = JSON.parse(list);
      setFavorites(tmp);
    }
  }
  const addFavorite = async (poke) => {
    try {
      const newList = [...favorites];
      const find = newList.filter((elem) => elem.name === poke.name);
      if (find.length === 0) {
        newList.push(poke);
        await AsyncStorage.setItem("_favorites", JSON.stringify(newList));
        setFavorites(newList);
      } else {
        const newListPokes = newList.filter((elem) => elem.name !== poke.name);
        await AsyncStorage.setItem("_favorites", JSON.stringify(newListPokes));
        setFavorites(newListPokes);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, updateFavorites, addFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
