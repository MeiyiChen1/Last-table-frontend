import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface Reservation {
  time: string;
  available_seats: number;
  restaurant_name: string;
  restaurant_type: string;
  location: string;
  phone_number: string;
}

interface Props {
  reservation: Reservation;
}

export default function ReservationInfo({ reservation }: Props) {
  const handleBooking = () => {
    Alert.alert("Booking Confirmed!", "Your reservation has been booked.");
  };

  const handleCall = () => {};

  const [latitude, longitude] = reservation.location
    .split(", ")
    .map((val) => parseFloat(val));

  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        <Text style={styles.label}>Restaurant:</Text>{" "}
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

      <Text style={[styles.label, { marginTop: 20 }]}>Location:</Text>
      <MapView
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title={reservation.restaurant_name}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" },
  info: { fontSize: 18, marginBottom: 10 },
  label: { fontWeight: "bold", color: "#333" },
  buttonContainer: { marginTop: 20, width: "100%" },
  map: { width: "100%", height: 200, marginTop: 10, borderRadius: 10 },
});
