import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { getReservations } from "../api";
import UserProfileInfo from "../components/user-profile-info";
import UserProfileReservations from "../components/user-profile-reservation";
const user = {
  name: "Alisha",
  email: "alisha@example.com",
  avatarUrl: "https://i.pravatar.cc/150?img=31",
};

interface Reservation {
  restaurant_name: string;
  restaurant_type: string;
  available_seats: number;
  time: string;
}

export default function UserProfile() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    getReservations()
      .then((data) => {
        setReservations(data.reservations);
      })
      .catch(console.error);
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <UserProfileInfo user={user} />
      <UserProfileReservations reservations={reservations} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 50, padding: 20 },
  title: { color: "black", fontWeight: "bold", fontSize: 30, marginBottom: 20 },
});
