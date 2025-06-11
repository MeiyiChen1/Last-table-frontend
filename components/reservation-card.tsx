import { deleteReservations, getVendors, getVendorUsernameQuery } from "@/api";
import { VendorLogInContext } from "@/Contexts";
import { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";


type Reservation = {
  id: string;
  time: string;
  available_seats: number;
  restaurant_name: string;
  restaurant_type: string;
};

type ReservationCardProps = {
  reservation: Reservation;
};

export default function ReservationCard(props: ReservationCardProps) {
  const [selectedVendorId, setSelectedVendorId] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  const vendorLogInContext = useContext(VendorLogInContext);

  if (!vendorLogInContext) {
    return <Text>hi</Text>;
  }

  const router = useRouter();
  const { signedInVendor } = vendorLogInContext;

  function handleDelete(id: any) {
    console.log(id);
    setIsDeleted(true);
    deleteReservations(id).then((result) => console.log(result));
  }

  useEffect(() => {
    if (selectedVendorId) {
      router.push(`/restaurant-details?id=${selectedVendorId}`);
    }
  }, [selectedVendorId]);

  function handleVendorLink(username: string) {
    console.log(username);

    const convertedUsername = username.replace(/ /, "_");

    getVendorUsernameQuery(convertedUsername).then((result) => {
      console.log(result.vendor.id);
      setSelectedVendorId(result.vendor.id);
      router.push(`/restaurant-details?id=${selectedVendorId}`);
    });
  }

  const styles = StyleSheet.create({
    card: {
      backgroundColor: "#f9f9f9",
      padding: 15,
      marginVertical: 10,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    button: {
      marginTop: 10,
      backgroundColor: "#007bff",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 6,
      alignSelf: "flex-start",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "600",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#007bff",
    },
  });
  //then create a conditional below that links to restaurants/{id} IF selectedVendorId != null

  function handleReserve(id : any) {

    router.push(`/reservation-details?id=${id}`)
  }


  return (
    <View style={styles.card}>
      {!isDeleted ? (
        <View>
          <Text style={styles.title}>Reservation Card</Text>
          <Text>⏰ {props.reservation.time}</Text>
          <Text>🪑 Seats Available: {props.reservation.available_seats}</Text>
          <Text
            onPress={() => handleVendorLink(props.reservation.restaurant_name)}
          >
            {props.reservation.restaurant_name}
          </Text>
          <Text>🍽️ Type:{props.reservation.restaurant_type}</Text>

          <TouchableOpacity style={styles.button}>
            
            <Button title="Reserve" 
            onPress={() => handleReserve(props.reservation.id)}
            ></Button>


          </TouchableOpacity>

          {signedInVendor ? (
            <TouchableOpacity style={styles.button}>
              <Button
                title="Remove Reservation"
                onPress={() => {
                  handleDelete(props.reservation.id);
                }}
              ></Button>
            </TouchableOpacity>
          ) : null}
        </View>
      ) : (
        <Text>Reservation Deleted!</Text>
      )}
    </View>
  );
}
