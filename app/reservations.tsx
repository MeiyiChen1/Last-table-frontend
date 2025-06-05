import { Text } from "react-native"
import { useState } from "react"
import ReservationList from "@/components/reservation-list"
import { ResourceSavingView } from "@react-navigation/elements"

function Reservations() {
    
    type Reservations = {
        time: string,
        available_seats: number,
        restaurant_name: string,
        restaurant_type: string
    }

    const dummyObj = {
        time: "7:30",
        available_seats: 2,
        restaurant_name: "mcdonalds",
        restaurant_type: "fastfood"
    }
    
    const [reservations, setReservations] = useState<Reservations[]>([dummyObj])

    return (
        <>
        <ReservationList reservations={reservations}/>
        </>
    ) 

}

export default Reservations