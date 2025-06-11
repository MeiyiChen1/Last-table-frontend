import { ScrollView, StyleSheet, View } from "react-native";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";
import ReservationCard from "./reservation-card";

type Reservation = {
    id: string,
    time: string,
    available_seats: number,
    restaurant_name: string,
    restaurant_type: string
}

type ReservationListProps = {
    reservations: Reservation[]
}

export default function ReservationList(props: ReservationListProps) {
    return (
        <>
        <ScrollView contentContainerStyle={{ paddingBottom: 10}}>
            <View>
        {props.reservations.map(reservation => {
            return <ReservationCard 
            key={reservation.id}
            reservation={reservation}/>
        })}
        </View>
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
    padding: typography.fontSizes.large,
  },
  title: {
    fontSize: typography.fontSizes.xLarge,
    fontWeight: "bold",
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.medium,
    textAlign: "center",
  },
  listContent: {
    paddingBottom: typography.fontSizes.large,
  },
});