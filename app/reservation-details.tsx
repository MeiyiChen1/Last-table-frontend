import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text } from "react-native";
import { getReservationById } from "../api";
import ReservationInfo from "../components/reservation-info";

interface Reservation {
  time: string;
  available_seats: number;
  restaurant_name: string;
  restaurant_type: string;
  location: string;
  telephone_number: string;
  //telephone number: need to update the backend to include it in the response
}
export default function ReservationDetails() {
  //   const params = useRoute();
  //   const { reservation_id } = params.params as { reservation_id: string };
  const reservation_id = "2QYrxCS7eFFgfuvcsnUh";
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
  container: { alignItems: "center", marginTop: 50, padding: 20 },
  title: { color: "black", fontWeight: "bold", fontSize: 30, marginBottom: 20 },
});
