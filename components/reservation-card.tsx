
import { View, Text } from "react-native"

type Reservation = {
    time: string,
    available_seats: number,
    restaurant_name: string,
    restaurant_type: string
}

type ReservationCardProps = {
    reservation: Reservation
}

export default function ReservationCard(props: ReservationCardProps) {
    return (
        <View>
            <Text>{props.reservation.time}</Text>
            <Text>{props.reservation.available_seats}</Text>
            <Text>{props.reservation.restaurant_name}</Text>
            <Text>{props.reservation.restaurant_type}</Text>
        </View>
    )

}