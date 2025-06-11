<<<<<<< HEAD
import { ScrollView, StyleSheet, View } from "react-native";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";
import ReservationCard from "./reservation-card";
=======
import ReservationCard from "./reservation-card";
import { ScrollView, View, Text } from "react-native";
import { VendorLogInContext } from "@/Contexts";
import { useEffect, useState, useContext } from "react";
>>>>>>> main

type Reservation = {
  id: string;
  time: string;
  available_seats: number;
  restaurant_name: string;
  restaurant_type: string;
};

type ReservationListProps = {
  reservations: Reservation[];
};

export default function ReservationList(props: ReservationListProps) {
  const vendorLogInContext = useContext(VendorLogInContext);

  if (!vendorLogInContext) {
    return <Text>hi</Text>;
  }

  const { signedInVendor, setSignedInVendor } = vendorLogInContext;
  //have linked with the restaurant name, can maybe think about changing this to the ID in future
  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
        <View>
          {props.reservations.map((reservation) => {
            console.log(signedInVendor, reservation.restaurant_name);
            if (
              signedInVendor &&
              signedInVendor === reservation.restaurant_name
            ) {
              return (
                <ReservationCard
                  key={reservation.id}
                  reservation={reservation}
                />
              );
            } else if (!signedInVendor) {
              return (
                <ReservationCard
                  key={reservation.id}
                  reservation={reservation}
                />
              );
            }
          })}
        </View>
<<<<<<< HEAD
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
    padding: typography.fontSizes.large,
  },
  title: {
    fontSize: typography.fontSizes.xLarge,
    fontWeight: "bold",
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.medium,
    textAlign: "center",
  },
  listContent: {
    paddingBottom: typography.fontSizes.large,
  },
});
=======
      </ScrollView>
    </>
  );
}
>>>>>>> main
