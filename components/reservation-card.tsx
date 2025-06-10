import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { deleteReservations } from "@/api";
import { useState, useContext } from "react";
import { VendorLogInContext } from "@/Contexts";

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
  const [isDeleted, setIsDeleted] = useState(false);

  const vendorLogInContext = useContext(VendorLogInContext);

  if (!vendorLogInContext) {
    return <Text>hi</Text>;
  }

  const { signedInVendor } = vendorLogInContext;

  function handleDelete(id: any) {
    console.log(id);
    setIsDeleted(true);
    deleteReservations(id).then((result) => console.log(result));
  }

  return (
    <View style={styles.card}>
      {!isDeleted ? (
        <View>
          <Text style={styles.title}>Reservation Card</Text>
          <Text>⏰ {props.reservation.time}</Text>
          <Text>🪑 Seats Available: {props.reservation.available_seats}</Text>
          <Text>{props.reservation.restaurant_name}</Text>
          <Text>🍽️ Type:{props.reservation.restaurant_type}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reserve</Text>
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
