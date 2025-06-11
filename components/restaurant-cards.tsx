import { useState, useEffect, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
// import { RestaurantProps } from "./restaurant-list";
import { postFavouritesByUserId, getVendors, getVendorById } from "../api";
import { Link } from "@react-navigation/native";
import { LogInContext } from "@/Contexts";

export type RestaurantProps = {
  icon_url: string;
  username: string;
  restaurant_type: string;
  id: string;
  telephone_number: string;
  location_data: string;
};

const styles = StyleSheet.create({
  div: {
    marginTop: 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
  },
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
  },
});

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
    <View style={styles.container}>
      <Link screen="restaurant-details" params={{ id: props.id }}>
        <View style={styles.div}>
          <Text>{props.icon_url}</Text>
          <Text>{props.username}</Text>
          <Text>{props.restaurant_type}</Text>
        </View>
      </Link>
      <Button
        title="Favourite"
        onPress={() => {
          handleFavourite(props.id);
        }}
      ></Button>
    </View>
  );
}
export default RestaurantCards;
