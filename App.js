import { createContext, useState } from "react";
import ResturantList from "./components/ResturantList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantDetails from "./components/RestaurantDetails";

const Stack = createNativeStackNavigator();

export const ResturantContext = createContext();

export default function App() {
  const [selectedResturant, setSelectedResturant] = useState();

  return (
    <NavigationContainer>
      <ResturantContext.Provider
        value={{ selectedResturant, setSelectedResturant }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{ title: "Resturant List" }}
            component={ResturantList}
          />
          <Stack.Screen name="Details" component={RestaurantDetails} />
        </Stack.Navigator>
      </ResturantContext.Provider>
    </NavigationContainer>
  );
}
