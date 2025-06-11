import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { getVendors } from "../api";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
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
              key={restaurant.id}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
export default RestaurantList;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: typography.fontSizes.large,
  },
  container: {
    flex: 1,
    padding: typography.fontSizes.large,
    backgroundColor: colours.white,
  },
  title: {
    fontSize: typography.fontSizes.xLarge,
    fontWeight: "bold",
    color: colours.textPrimary,
    textAlign: "center",
    marginBottom: typography.fontSizes.medium,
  },
});
