import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

interface reservation {
  username: string;
  icon_url: string;
  telephone_number: string;
  location_data: string;
  restaurant_type: string;
  //telephone number: need to update the backend to include it in the response
}
export default function ReservationDetails() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reservation Details</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 50, padding: 20 },
  title: { color: "black", fontWeight: "bold", fontSize: 30, marginBottom: 20 },
});
