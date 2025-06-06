import ReservationForm from "@/components/reservation-form"
import ReservationList from "@/components/reservation-list"
import { useState } from "react"
import { Text, View } from "react-native"


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
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Reservations</Text>
            <ReservationList reservations={reservations}/>
            <ReservationForm />
        </View>
    );

}

export default Reservations;