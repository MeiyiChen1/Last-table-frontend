import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
// import { RestaurantProps } from "./restaurant-list";
import { postFavouritesByUserId, getVendors, getVendorById } from "../api";

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
      <View style={styles.div}>
        <Text>{props.icon_url}</Text>
        <Text>{props.username}</Text>
        <Text>{props.restaurant_type}</Text>

        {/* <Button
          title="Favourite"
          onPress={() => {
            handleFavourite(props.id);
          }}
        ></Button> */}
      </View>

      {/* <button> */}
      {/* <div className="article-card">
        <h2>{article.title}</h2>
        <h3>topic: {article.topic}</h3>
        <h3>author: {article.author}</h3>
      </div> */}
      {/* </button> */}
    </View>
  );
}
export default RestaurantCards;
