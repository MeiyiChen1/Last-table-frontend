import { VendorLogInContext } from "@/Contexts";
import { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";
import ReservationCard from "./reservation-card";
import { getVendorById } from "@/api";

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

type Vendor = {
      username: string,
      icon_url: string,
      telephone_number: string,
      location_data: string,
      restaurant_type: string
    }

export default function ReservationList(props: ReservationListProps) {
const vendorLogInContext = useContext(VendorLogInContext);


  if (!vendorLogInContext) {
    return <Text>hi</Text>;
  }

  const { signedInVendor, setSignedInVendor } = vendorLogInContext;

  const [vendor, setVendor] = useState<Vendor>({
              username: "PaStation London",
              icon_url: "test",
              telephone_number: "07xxx 1x4140",
              location_data: "76 Tottenham Ct Rd, London W1T 2HG",
              restaurant_type: "Italian"
          })

  useEffect(() => {
    getVendorById(signedInVendor)
    .then(result => {
      setVendor(result)
      console.log(result)
    })
  }, [])


  console.log(vendor, "vendor")


  //have linked with the restaurant name, can maybe think about changing this to the ID in future
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          {props.reservations.map((reservation) => {
            console.log(signedInVendor, reservation.restaurant_name);
            console.log(vendor.username, reservation.restaurant_name, ".....")
            if (
              signedInVendor &&
              vendor.username === reservation.restaurant_name
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
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
    padding: typography.fontSizes.large,
  },
  innerContainer: {
    width: "90%"
  },
  title: {
    fontSize: typography.fontSizes.xLarge,
    fontWeight: "bold",
    color: colours.primaryGreen,
    marginBottom: typography.fontSizes.medium,
    textAlign: "center",
  },
  listContent: {
    paddingBottom: typography.fontSizes.large,
  },
});
