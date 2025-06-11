import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// import { RestaurantProps } from "./restaurant-list";
import { LogInContext } from "@/Contexts";
import { Link } from "@react-navigation/native";
import { getVendorById, postFavouritesByUserId } from "../api";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";

export type RestaurantProps = {
  icon_url: string;
  username: string;
  restaurant_type: string;
  id: string;
  telephone_number: string;
  location_data: string;
};


//we need to implement this functionality after we have created some useState for the user.

function RestaurantCards(props: RestaurantProps) {
  const logInContext = useContext(LogInContext);
  if (!logInContext) {
    return <Text>hi</Text>;
  }
  const { signedInUser, setSignedInUser } = logInContext;
  console.log(signedInUser);

  function handleFavourite(id: string) {
    getVendorById(id).then((result) => {
      console.log(result);

      postFavouritesByUserId(signedInUser, result).then((result) => {
        console.log(result);
      });
    });
  }

  return (
    <View style={styles.card}>
      <Link screen="restaurant-details" params={{ id: props.id }}>
        <View style={styles.detailsBox}>
          <Text style={styles.icon}>{props.icon_url}</Text>
          <Text style={styles.username}>{props.username}</Text>
          <Text style={styles.restaurantType}>{props.restaurant_type}</Text>
        </View>
      </Link>
      <View style={styles.buttonWrapper}>
        <Button
          title="Favourite"
          onPress={() => handleFavourite(props.id)}
          color={colours.primaryGreen}
        />
      </View>
    </View>
  );
}
export default RestaurantCards;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colours.lightGreen,
    borderRadius: 12,
    padding: typography.fontSizes.large,
    marginVertical: typography.fontSizes.medium,
    alignItems: "center",
  },
  detailsBox: {
    width: "100%",
    alignItems: "center",
    marginBottom: typography.fontSizes.medium,
  },
  icon: {
    fontSize: typography.fontSizes.xLarge,
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.small,
  },
  username: {
    fontSize: typography.fontSizes.large,
    fontWeight: "bold",
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.small,
  },
  restaurantType: {
    fontSize: typography.fontSizes.medium,
    color: colours.textSecondary,
  },
  buttonWrapper: {
    width: "100%",
    marginTop: typography.fontSizes.medium,
  },
});
