import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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
  container: { alignItems: "center", marginTop: 50, padding: 20 },
  title: { color: "black", fontWeight: "bold", fontSize: 30, marginBottom: 20 },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginTop: 12,
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  text: {
    fontSize: 16,
    color: "#444",
    marginBottom: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#ccc",
  },
});
