import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
// import { RestaurantProps } from "./restaurant-list";
import { postFavouritesByUserId, getVendors, getVendorById } from "../api";
import { Link } from "@react-navigation/native";

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

// function handleFavourite(id: string) {
//   getVendorById(id).then((result) => {
//     // console.log(result);
//     const {
//       username,
//       icon_url,
//       telephone_number,
//       location_data,
//       restaurant_type,
//     } = result;
//     postFavouritesByUserId(
//       username,
//       icon_url,
//       telephone_number,
//       location_data,
//       restaurant_type
//     ).then((result) => {
//       console.log(result);
//     });
//   });
// }

//we need to implement this functionality after we have created some useState for the user.

function RestaurantCards(props: RestaurantProps) {
  return (
    <View style={styles.container}>
      <Link screen="restaurant-details" params={{ id: props.id }}>
        <View style={styles.div}>
          <Text>{props.icon_url}</Text>
          <Text>{props.username}</Text>
          <Text>{props.restaurant_type}</Text>
        </View>
        {/* <Button
          title="Favourite"
          onPress={() => {
            handleFavourite(props.id);
          }}
        ></Button> */}
      </Link>
    </View>
  );
}
export default RestaurantCards;
