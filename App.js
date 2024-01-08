import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./views/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const Tab = createBottomTabNavigator();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let icon = "";
              if (route.name === "Home") {
                icon = "home";
              } else if (route.name === "Favoritos") {
                icon = "heart";
              } else if (route.name === "Acerca") {
                icon = "information";
              }
              return <Icon name={icon} size={30} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Favoritos" component={Home} />
          <Tab.Screen name="Acerca" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
export default App;
