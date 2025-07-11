import * as Linking from "expo-linking";
import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { getVendorUsernameQuery } from "../api";
import { colours } from "../styles/colours";
import { commonStyles } from "../styles/commonStyles";
import { typography } from "../styles/typography";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: typography.fontSizes.large,
    backgroundColor: colours.white,
    borderRadius: 12,
    marginTop: typography.fontSizes.large,
    ...commonStyles.cardShadow,
  },
  info: {
    fontSize: typography.fontSizes.medium,
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.small,
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    color: colours.textSecondary,
  },
  buttonContainer: {
    marginTop: typography.fontSizes.large,
    width: "100%",
  },
  map: {
    width: "100%",
    height: 200,
    marginTop: typography.fontSizes.medium,
    borderRadius: 10,
  },
});
interface Reservation {
  time: string;
  available_seats: number;
  restaurant_name: string;
  restaurant_type: string;
  location: string;
  restaurant_id: string;
}

interface Vendor {
  telephone_number: string;
}

interface Props {
  reservation: Reservation;
}

export default function ReservationInfo({ reservation }: Props) {
  const [vendor, setVendor] = useState<Vendor | null>(null);

  console.log(reservation);

  // reservtation => name of restaurant => restaurant

  useEffect(() => {
    getVendorUsernameQuery(reservation.restaurant_name)
      .then((data) => {
        console.log(data.vendor);
        setVendor(data.vendor);
      })
      .catch(() => Alert.alert("Failed to load restaurant contact info"));
  }, [reservation.restaurant_name]);

  const handleBooking = () => {
    Alert.alert("Booking Confirmed!", "Your reservation has been booked.");
  };

  const handleCall = () => {
    if (vendor?.telephone_number) {
      Linking.openURL(`tel:${vendor.telephone_number}`);
    } else {
      Alert.alert("No phone number available");
    }
  };

  //MAP
  //   const [latitude, longitude] = reservation.location
  //     .split(", ")
  //     .map((val) => parseFloat(val)) || [0, 0];

  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        <Text style={styles.label}>Restaurant:</Text>
        {reservation.restaurant_name}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.label}>Type:</Text> {reservation.restaurant_type}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.label}>Time:</Text> {reservation.time}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.label}>Seats:</Text> {reservation.available_seats}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Book Now" onPress={handleBooking} />
        <View style={{ height: 10 }} />
        <Button title="Call Restaurant" onPress={handleCall} />
      </View>
    </View>
  );
}
