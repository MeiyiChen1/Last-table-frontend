import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text } from "react-native";
import { getReservationById } from "../api";
import ReservationInfo from "../components/reservation-info";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";
import { useRoute } from "@react-navigation/native";


interface Reservation {
  time: string;
  available_seats: number;
  restaurant_name: string;
  restaurant_type: string;
  location: string;
  telephone_number: string;
  //telephone number: need to update the backend to include it in the response
}
export default function ReservationDetails({ route }: { route: any }) {

  //  const reservation_id = "2QYrxCS7eFFgfuvcsnUh";

   const params = useRoute();
  const { id: reservation_id } = params.params as { id: string };


  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getReservationById(reservation_id)
      .then((data) => {
        console.log("Fetched response:", data);
        setReservation(data.reservation);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
        console.log("Failed to fetch reservation:", err);
        setError("Fail to load details");
        setLoading(false);
      });
  }, [reservation_id]);
  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  if (error) return <Text>{error}</Text>;
  if (!reservation) return <Text>No reservation found.</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reservation Details</Text>
      <ReservationInfo reservation={reservation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: typography.fontSizes.large,
    marginTop: typography.fontSizes.large,
  },
  title: {
    color: colours.textPrimary,
    fontSize: typography.fontSizes.xLarge,
    fontWeight: "bold",
    marginBottom: typography.fontSizes.large,
    textAlign: "center",
  },
});