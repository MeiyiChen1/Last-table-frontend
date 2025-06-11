import { deleteReservations } from "@/api";
import { VendorLogInContext } from "@/Contexts";
import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";

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
    backgroundColor: colours.lightGreen,
    padding: typography.fontSizes.large,
    marginVertical: typography.fontSizes.medium,
    borderRadius: 12,
    shadowColor: colours.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: typography.fontSizes.xLarge,
    fontWeight: "bold",
    color: colours.primaryGreen, // ✅ GREEN
    marginBottom: typography.fontSizes.small,
  },
  deleteButton: {
    marginTop: typography.fontSizes.medium,
    backgroundColor: colours.accentYellow, // or mediumGreen if you prefer
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  deleteButtonText: {
    color: colours.black,
    fontWeight: "600",
  },
  deletedText: {
    fontSize: typography.fontSizes.large,
    fontWeight: "600",
    color: colours.textSecondary,
    textAlign: "center",
  },
  button: {
    marginTop: 10,
    backgroundColor: colours.primaryGreen,
    paddingVertical: typography.fontSizes.small,
    paddingHorizontal: typography.fontSizes.large,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
