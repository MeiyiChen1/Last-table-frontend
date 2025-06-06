import { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { getVendors } from "../api";
import RestaurantCards from "./restaurant-cards";
export type RestaurantProps = {
  icon_url: string;
  username: string;
  restaurant_type: string;
  id: string;
  telephone_number: string;
  location_data: string;
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
    <ScrollView>
      <View>
        {restaurantList.map((restaurant) => {
          const {
            icon_url,
            username,
            restaurant_type,
            id,
            telephone_number,
            location_data,
          } = restaurant;
          console.log(restaurant);
          return (
            <RestaurantCards
              icon_url={icon_url}
              username={username}
              restaurant_type={restaurant_type}
              id={id}
              location_data={location_data}
              telephone_number={telephone_number}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
export default RestaurantList;
