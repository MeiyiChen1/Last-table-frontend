import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import RestaurantInfo from "@/components/restaurant-info"
import RestaurantReservations from "@/components/restaurant-reservations"

export default function RestaurantProfile() {

    const vendor = {
        username: "PaStation London",
        icon_url: "test",
        telephone_number: "07xxx 1x4140",
        location_data: "76 Tottenham Ct Rd, London W1T 2HG",
        restaurant_type: "Italian"
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Restaurant Profile</Text>
        <RestaurantInfo vendor={vendor}/>
        <RestaurantReservations vendor={vendor}/>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 50, padding: 20 },
  title: { color: "black", fontWeight: "bold", fontSize: 30, marginBottom: 20 },
});