import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { getVendors } from "../api";
import RestaurantCards from "./restaurant-cards";
export type RestaurantProps = {
  icon_url: string;
  username: string;
  restaurant_type: string;
  id: string;
};
function RestaurantList() {
  const [restaurantList, setRestaurantList] = useState<RestaurantProps[]>([]);

  useEffect(() => {
    getVendors().then((result) => {
      console.log(result);
      setRestaurantList(result);
    });
  }, []);

  return (
    <View>
      {restaurantList.map((restaurant) => {
        const { icon_url, username, restaurant_type, id } = restaurant;
        console.log(restaurant);
        return (
          <RestaurantCards
            icon_url={icon_url}
            username={username}
            restaurant_type={restaurant_type}
            id={id}
          />
        );
      })}
    </View>
  );
}
export default RestaurantList;
