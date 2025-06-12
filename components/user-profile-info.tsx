import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";

interface UserProfile {
  name: string;
  email: string;
  icon_url: string;
  username: string;
  favourites: Vendor[]
}

type Vendor = {
      username: string,
      icon_url: string,
      telephone_number: string,
      location_data: string,
      restaurant_type: string
    }




interface Props {
  user: UserProfile;
  favourites: Vendor[]
}





export default function UserProfileInfo({ user, favourites}: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.icon_url }} style={styles.avatar} />
      <Text style={styles.username}>{user.username}</Text>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.username}>My favourites:</Text>
      {favourites.map(restaurant => {
        return <Text>{restaurant.username}</Text>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.lightGreen,
    borderRadius: 12,
    padding: typography.fontSizes.large,
    alignItems: "center",
    marginVertical: typography.fontSizes.large,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colours.border,
    marginBottom: typography.fontSizes.medium,
  },
  username: {
    fontSize: typography.fontSizes.large,
    fontWeight: "bold",
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.small,
  },
  name: {
    fontSize: typography.fontSizes.large,
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.small,
  },
  email: {
    fontSize: typography.fontSizes.medium,
    color: colours.textSecondary,
  },
});
