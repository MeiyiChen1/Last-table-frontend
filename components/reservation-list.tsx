import ReservationCard from "./reservation-card"
import { ScrollView, View } from "react-native"


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