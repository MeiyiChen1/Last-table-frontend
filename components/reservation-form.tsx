import { postReservations } from "@/api";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function ReservationForm() {
  const [time, setTime] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");

    const handleSubmit = async () => {
    try {
      await postReservations(
        time,
        Number(availableSeats),
        "mcdonalds", 
        "fastfood"   
      );
      alert("Reservation submitted successfully!");
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Failed to submit reservation.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Reservation Time</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter time (e.g. 18:30)"
        value={time}
        onChangeText={setTime}
      />

      <Text style={styles.label}>Available Seats</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number of seats"
        value={availableSeats}
        onChangeText={setAvailableSeats}
        keyboardType="numeric"
      />

      <Button title="Submit Reservation" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
});
