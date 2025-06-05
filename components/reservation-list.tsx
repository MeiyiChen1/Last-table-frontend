import ReservationCard from "./reservation-card"
import { View } from "react-native"


type Reservation = {
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
        <View>
        {props.reservations.map(reservation => {
            return <ReservationCard reservation={reservation}/>
        })}
        </View>
        </>
    )
}