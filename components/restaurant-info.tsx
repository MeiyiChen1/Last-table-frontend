import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";

interface Vendor {
  username: string;
  icon_url: string;
  telephone_number: string;
  location_data: string;
  restaurant_type: string;
}
interface Props {
  vendor: Vendor;
}

export default function RestaurantInfo({ vendor }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: vendor.icon_url }} style={styles.avatar} />
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.text}>{vendor.username}</Text>

      <Text style={styles.label}>Type:</Text>
      <Text style={styles.text}>{vendor.restaurant_type}</Text>

      <Text style={styles.label}>Telephone:</Text>
      <Text style={styles.text}>{vendor.telephone_number}</Text>

      <Text style={styles.label}>Location:</Text>
      <Text style={styles.text}>{vendor.location_data}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.lightGreen,
    alignItems: "center",
    marginTop: typography.fontSizes.large,
    padding: typography.fontSizes.large,
    borderRadius: 12,
  },
  label: {
    fontSize: typography.fontSizes.medium,
    fontWeight: "bold",
    color: colours.textPrimary,
    marginTop: typography.fontSizes.small,
  },
  text: {
    fontSize: typography.fontSizes.medium,
    color: colours.textSecondary,
    marginBottom: typography.fontSizes.small,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colours.border,
    marginBottom: typography.fontSizes.medium,
  },
});