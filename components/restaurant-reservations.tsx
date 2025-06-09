import ReservationList from "./reservation-list";
import { useEffect, useState } from "react"
import { getReservations } from "@/api";

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
        <>
        <ReservationList reservations={reservations}/>
        </>
    )

}
