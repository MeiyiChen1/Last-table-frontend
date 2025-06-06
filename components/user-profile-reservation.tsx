import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Reservation {
  restaurant_name: string;
  restaurant_type: string;
  available_seats: number;
  time: string;
}

interface Props {
  reservations: Reservation[];
}

function formatTime(time: string) {
  if (!time) return "No time provided";

  const date = new Date(time);
  if (isNaN(date.getTime())) {
    return "Invalid date string";
  }
  return date.toLocaleString();
}

export default function UserProfileReservations({ reservations }: Props) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Reservations Booked</Text>
      {reservations.map((res, index) => (
        <View key={index} style={styles.reservationCard}>
          <Text style={styles.text}>
            <Text style={styles.label}>Restaurant:</Text> {res.restaurant_name}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Type:</Text> {res.restaurant_type}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Guests:</Text> {res.available_seats}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Time:</Text> {formatTime(res.time)}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", paddingHorizontal: 10 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  reservationCard: {
    maxWidth: 350,
    backgroundColor: "#f2f2f2",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignSelf: "center",
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
});
