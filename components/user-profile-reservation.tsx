import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colours } from "../styles/colours";
import { commonStyles } from "../styles/commonStyles";
import { typography } from "../styles/typography";

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
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Reservations Booked</Text>
      {reservations.map((res, index) => (
        <View key={index} style={[styles.reservationCard, commonStyles.cardShadow]}>
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
  container: {
    width: "100%",
    paddingHorizontal: typography.fontSizes.large,
    paddingBottom: typography.fontSizes.large,
  },
  sectionTitle: {
    fontSize: typography.fontSizes.xLarge,
    fontWeight: "bold",
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.large,
    textAlign: "center",
  },
  reservationCard: {
    backgroundColor: colours.lightGreen,
    borderRadius: 12,
    padding: typography.fontSizes.large,
    marginBottom: typography.fontSizes.large,
    alignSelf: "center",
    width: "100%",
    maxWidth: 400,
  },
  label: {
    fontSize: typography.fontSizes.medium,
    fontWeight: "bold",
    color: colours.textPrimary,
  },
  text: {
    fontSize: typography.fontSizes.medium,
    color: colours.textSecondary,
    marginBottom: typography.fontSizes.small,
  },
});