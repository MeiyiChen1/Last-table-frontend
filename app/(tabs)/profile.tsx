import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import UserProfileInfo from "../../components/user-profile-info";
import UserProfileReservations from "../../components/user-profile-reservation";
import { LogInContext, VendorLogInContext } from "@/Contexts";
import { getUser, getReservationById} from "../../api";

import { getReservations } from "@/api";
import ReservationListWithRemove, { Reservation } from "@/components/reservation-list-with-remove";
import RestaurantInfo from "@/components/restaurant-info";



export default function Profile() {

    interface Reservation {
    id: string;
    restaurant_name: string;
    restaurant_type: string;
    available_seats: number;
    time: string;
    }

    type User = {
    name: string,
    email: string,
    icon_url: string,
    username: string,
    }
    
    const [user, setUser] = useState<User>({
        name: "test",
        email: "test",
        icon_url: "test",
        username: "test"
    })

    const [reservations, setReservations] = useState<Reservation[]>([]);

    const logInContext = useContext(LogInContext);
    const { signedInUser, setSignedInUser } = logInContext;


    const styles = StyleSheet.create({
    container: { alignItems: "center", marginTop: 50, padding: 20 },
    title: { color: "black", fontWeight: "bold", fontSize: 30, marginBottom: 20 },
    });

    useEffect(() => {
    
        if (!signedInUser) {
    
        } else {
          getUser(signedInUser)
        .then(result => {
          console.log(result)
          setUser(result.user)
          getReservationById(signedInUser)
          .then(result => setReservations(result.reservations))
          .catch(err => console.log(err))
        })
        }
      }, [signedInUser])

      // --------------------------------------------------------

      const vendor = {
              username: "PaStation London",
              icon_url: "test",
              telephone_number: "07xxx 1x4140",
              location_data: "76 Tottenham Ct Rd, London W1T 2HG",
              restaurant_type: "Italian"
          }
          
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
        <>
        {signedInUser ? (
        <>
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>User Profile</Text>
        <UserProfileInfo user={user} />
        <UserProfileReservations reservations={reservations} />
        </ScrollView>
        </>
        ) : 
        (
        <>
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Restaurant Profile</Text>
        <RestaurantInfo vendor={vendor}/>
        <ReservationListWithRemove
        reservations={reservations}
        onRemove={handleRemove}
        />
        </ScrollView>
        </>)}
        </>
    )

}