import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

export const cardStyles = StyleSheet.create({
  container: {
    width: "45%",
    height: height * 0.4,
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
export const headerStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 110, // Cambia esto al ancho de tu logo
    height: 110, // Cambia esto a la altura de tu logo
    resizeMode: "contain",
  },

  TextInput: {
    fontFamily: "sans-serif",
    width: "100%",

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
    marginBottom: 20,
  },
  search: {
    width: "85%",
    marginLeft: "1%",
    marginRight: "2%",
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
export const favoritesStyles = StyleSheet.create({
  container: {
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: 20,
    marginBottom: 20,
  },
});
export const homeStyles = StyleSheet.create({
  container: {
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: 20,

    flex: 1,
    backgroundColor: "#fff",
  },
});
export const modalStyles = StyleSheet.create(
  {
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      fontSize: 16,
      fontWeight: "bold",
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
  // Más estilos aquí...
);
