import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
}
interface Reservation {
  restaurantName: string;
  restaurantType: string;
  guests: number;
  bookingTime: string;
}

const user: UserProfile = {
  name: "Alisha",
  email: "alisha@example.com",
  avatarUrl: "https://i.pravatar.cc/150?img=31",
};

const reservations: Reservation[] = [
  {
    restaurantName: "Wagamama",
    restaurantType: "Japanese",
    guests: 2,
    bookingTime: "June 10, 2025, 18:00",
  },
  {
    restaurantName: "Bella Italia",
    restaurantType: "Italian",
    guests: 4,
    bookingTime: "June 15, 2025, 12:30",
  },
];

export default function UserProfile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.sectionTitle}>Reservations Booked</Text>
      {reservations.map((res, index) => (
        <View key={index} style={styles.reservationCard}>
          <Text>
            <Text>Restaurant:</Text> {res.restaurantName}
          </Text>
          <Text>
            <Text>Type:</Text> {res.restaurantType}
          </Text>
          <Text>
            <Text>Guests:</Text> {res.guests}
          </Text>
          <Text>
            <Text>Time:</Text> {res.bookingTime}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 50, padding: 20 },
  title: { color: "black", fontWeight: "bold", fontSize: 30, marginBottom: 20 },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  reservationCard: {
    maxWidth: 350,
    backgroundColor: "#f2f2f2",
    borderColor: "ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
});
