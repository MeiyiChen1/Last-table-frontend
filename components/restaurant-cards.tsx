import { useContext, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
// import { RestaurantProps } from "./restaurant-list";
import { LogInContext } from "@/Contexts";
import { Link } from "@react-navigation/native";
import {
  deleteFavouritesByUserId,
  getVendorById,
  postFavouritesByUserId,
} from "../api";
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

// const styles = StyleSheet.create({
//   div: {
//     marginTop: 50,
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "black",
//     borderRadius: 3,
//   },
//   container: {
//     flex: 1,

//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "black",
//     borderRadius: 3,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     resizeMode: "cover",
//   },
// });

//we need to implement this functionality after we have created some useState for the user.

function RestaurantCards(props: RestaurantProps) {
  const logInContext = useContext(LogInContext);
  if (!logInContext) {
    return <Text>hi</Text>;
  }
  const { signedInUser, setSignedInUser } = logInContext;
  console.log(signedInUser);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [removeButtonClicked, setRemoveButtonClicked] = useState(false);

  function handleFavourite(id: string) {
    setButtonClicked(true);
    getVendorById(id).then((result) => {
      console.log(result);

      result.id = id;
      console.log(result, "< with id added");

      postFavouritesByUserId(signedInUser, result).then((result) => {
        console.log(result);
      });
    });
  }

  function handleDeleteFavourite(signedInUser: any, vendorId: string) {
    setButtonClicked(false);
    setRemoveButtonClicked(true);
    deleteFavouritesByUserId(signedInUser, props.id).then(() => {});
  }

  return (
    <View style={styles.buttonWrapper}>
      <View style={styles.card}>
        <Link screen="restaurant-details" params={{ id: props.id }}>
          <View style={styles.detailsBox}>
            <Image source={{ uri: props.icon_url }} style={styles.image} />
            <Text style={styles.username}>{props.username}</Text>
            <Text style={styles.restaurantType}>{props.restaurant_type}</Text>
          </View>
        </Link>

        <View style={styles.buttonWrapper}>
          {!buttonClicked ? (
            removeButtonClicked ? (
              <>
                <Text>Removed from your favourites!</Text>
                <Button
                  title="Favourite"
                  onPress={() => handleFavourite(props.id)}
                  color={colours.primaryGreen}
                />
              </>
            ) : (
              <>
                <Button
                  title="Favourite"
                  onPress={() => handleFavourite(props.id)}
                  color={colours.primaryGreen}
                />
              </>
            )
          ) : (
            <>
              <Text>Added to your favourites!</Text>
              <Button
                title="Remove"
                onPress={() => handleDeleteFavourite(signedInUser, props.id)}
                color={colours.textPrimary}
              />
            </>
          )}
        </View>
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
    color: colours.primaryGreen,
    marginBottom: typography.fontSizes.small,
  },
  username: {
    fontSize: typography.fontSizes.large,
    fontWeight: "bold",
    color: colours.primaryGreen,
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
});
