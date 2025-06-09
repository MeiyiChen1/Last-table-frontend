import { getVendorById } from "@/api";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text } from "react-native";
import RestaurantInfo from "../components/restaurant-info";

interface Vendor {
  username: string;
  icon_url: string;
  telephone_number: string;
  location_data: string;
  restaurant_type: string;
  //description: need update the backend
}

export default function RestaurantDetails({ route }: { route: any }) {
  const params = useRoute();
  const { id: vendor_id } = params.params as { id: string };
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getVendorById(vendor_id)
      .then((data) => {
        setVendor(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Failed to fetch vendor:", err);
        setError("Failed to load the restaurant details, try again later");
        setLoading(false);
      });
  }, [vendor_id]);

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  if (error) return <Text>{error}</Text>;
  if (!vendor) return <Text>No vendor found.</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Restaurant Details</Text>
      <RestaurantInfo vendor={vendor} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 50, padding: 20 },
  title: { color: "black", fontWeight: "bold", fontSize: 30, marginBottom: 20 },
});
