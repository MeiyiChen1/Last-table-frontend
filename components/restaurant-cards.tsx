import { useContext } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
// import { RestaurantProps } from "./restaurant-list";
import { LogInContext } from "@/Contexts";
import { Link } from "@react-navigation/native";
import { getVendorById, postFavouritesByUserId } from "../api";

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
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
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
          <Image source={{ uri: props.icon_url }} style={styles.image} />
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
