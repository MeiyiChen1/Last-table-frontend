import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Reservation = {
    time: string,
    available_seats: number,
    restaurant_name: string,
    restaurant_type: string
}

type ReservationCardProps = {
    reservation: Reservation;
}

export default function ReservationCard(props: ReservationCardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Reservation Card</Text>
            <Text>⏰ {props.reservation.time}</Text>
            <Text>🪑 Seats Available: {props.reservation.available_seats}</Text>
            <Text>{props.reservation.restaurant_name}</Text>
            <Text>🍽️ Type:{props.reservation.restaurant_type}</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Reserve</Text>
            </TouchableOpacity>
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
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#007bff",
      }
  });