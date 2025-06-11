import { getReservations } from "@/api";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";
import ReservationList from "./reservation-list";

type Vendor = {
  username: string;
  icon_url: string;
  telephone_number: string;
  location_data: string;
  restaurant_type: string;
}

type Props = {
    vendor: Vendor;
}

    export default function RestaurantReservations({vendor}: Props) {

    type Reservations = {
        id: string,
        time: string,
        available_seats: number,
        restaurant_name: string,
        restaurant_type: string
    }

    const [reservations, setReservations] = useState<Reservations[]>([])

    useEffect(() => {
        getReservations()
        .then(result => {
            console.log(result.reservations)
            const filtList = result.reservations.filter((el: Reservations) => el.restaurant_name === vendor.username)
            setReservations(filtList) 
        })
        .catch(err => console.log(err)) 
    }
     , [])


    return (
        <View style={styles.container}>
        <Text style={styles.title}>Reservations for {vendor.username}</Text>
        <ReservationList reservations={reservations}/>
        </View>
    )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: typography.fontSizes.large,
    backgroundColor: colours.white,
  },
  title: {
    fontSize: typography.fontSizes.xLarge,
    fontWeight: "bold",
    color: colours.textPrimary,
    textAlign: "center",
    marginBottom: typography.fontSizes.medium,
  },
});