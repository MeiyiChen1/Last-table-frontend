import SearchComponent from "@/components/searchComponent";
import { Text, View } from "react-native";
import ReservationForm from "@/components/reservation-form";
import ReservationList from "@/components/reservation-list";
import { useEffect, useState, useContext } from "react";
import { getReservations } from "@/api";
import { VendorLogInContext } from "@/Contexts";

function Reservations() {
  const vendorLogInContext = useContext(VendorLogInContext);

  if (!vendorLogInContext) {
    return <Text>hi</Text>;
  }

  const { signedInVendor, setSignedInVendor } = vendorLogInContext;

  type Reservations = {
    id: string;
    time: string;
    available_seats: number;
    restaurant_name: string;
    restaurant_type: string;
  };

  const dummyObj = {
    id: "cheese",
    time: "7:30",
    available_seats: 2,
    restaurant_name: "mcdonalds",
    restaurant_type: "fastfood",
  };

  const [reservations, setReservations] = useState<Reservations[]>([dummyObj]);

  useEffect(() => {
    getReservations()
      .then((reservationsData) => {
        console.log(reservationsData);
        setReservations(reservationsData.reservations);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Reservations</Text>
      <SearchComponent />
      <ReservationList reservations={reservations} />
      {signedInVendor ? <ReservationForm /> : null}
    </View>
  );
}

export default Reservations;
