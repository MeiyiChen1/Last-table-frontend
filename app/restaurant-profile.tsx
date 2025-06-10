import { getReservations } from "@/api";
import ReservationListWithRemove, { Reservation } from "@/components/reservation-list-with-remove";
import RestaurantInfo from "@/components/restaurant-info";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";


export default function RestaurantProfile() {

    const vendor = {
        username: "PaStation London",
        icon_url: "test",
        telephone_number: "07xxx 1x4140",
        location_data: "76 Tottenham Ct Rd, London W1T 2HG",
        restaurant_type: "Italian"
    }
    
    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {
      getReservations()
        .then((result) => {
          const filtered = result.reservations.filter(
            (r: Reservation) => r.restaurant_name === vendor.username
          );
          setReservations(filtered);
        })
        .catch((err) => console.log(err));
    }, []);

    const handleRemove = (id: string) => {
        setReservations((prev) => prev.filter((r) => r.id !== id));
      };

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Restaurant Profile</Text>
        <RestaurantInfo vendor={vendor}/>
        <ReservationListWithRemove
            reservations={reservations}
            onRemove={handleRemove}
        />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 50, padding: 20 },
  title: { color: "black", fontWeight: "bold", fontSize: 30, marginBottom: 20 },
});