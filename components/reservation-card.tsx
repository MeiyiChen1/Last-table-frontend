import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colours } from '../styles/colours';
import { typography } from '../styles/typography';

type Reservation = {
    id: string,
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
            <Text style={styles.restaurantName}>{props.reservation.restaurant_name}</Text>
            <Text style={styles.restaurantType}>{props.reservation.restaurant_type}</Text>
            <View style={styles.detailsRow}>
                <View style={styles.detailBox}>
                    <Text style={styles.detailText}>⏰ {props.reservation.time}</Text>
                </View>
                <View style={styles.detailBox}>
                    <Text style={styles.detailText}>🪑 {props.reservation.available_seats} Seats Available</Text>
                </View>
            </View>
            <Text style={styles.restaurantTypeSmall}>🍽️ Type: {props.reservation.restaurant_type}</Text>
                      
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Reserve</Text>
            </TouchableOpacity>
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
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        alignItems: 'center', 
    },
    restaurantName: {
        fontSize: typography.fontSizes.xLarge,
        fontWeight: "bold",
        color: colours.textPrimary,
        marginBottom: typography.fontSizes.small,
        textAlign: 'center',
    },
    restaurantType: {
        fontSize: typography.fontSizes.medium,
        color: colours.textSecondary,
        marginBottom: typography.fontSizes.medium,
        textAlign: 'center',
    },
    restaurantTypeSmall: { 
        fontSize: typography.fontSizes.large, 
        color: colours.textSecondary,
        marginTop: typography.fontSizes.medium,
        textAlign: 'center',
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: typography.fontSizes.large,
    },
    detailBox: {
        backgroundColor: colours.white, 
        paddingVertical: typography.fontSizes.small,
        paddingHorizontal: typography.fontSizes.large,
        borderRadius: 8,
        shadowColor: colours.black, 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    detailText: {
        fontSize: typography.fontSizes.medium,
        fontWeight: "600",
        color: colours.textPrimary,
    },
    button: {
        marginTop: typography.fontSizes.large,
        backgroundColor: colours.primaryGreen, 
        paddingVertical: typography.fontSizes.medium,
        paddingHorizontal: typography.fontSizes.xLarge,
        borderRadius: 10, 
        alignSelf: "stretch", 
        shadowColor: colours.black, 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6,
    },
    buttonText: {
        color: colours.white,
        fontWeight: "bold",
        fontSize: typography.fontSizes.large,
        textAlign: 'center',
    },
});
