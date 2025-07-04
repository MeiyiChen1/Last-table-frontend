import { postReservations } from "@/api";
import { VendorLogInContext } from "@/Contexts";
import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colours } from "../styles/colours";
import { commonStyles } from "../styles/commonStyles";
import { typography } from "../styles/typography";
import { getVendorById } from "@/api";

export default function ReservationForm() {
  const [time, setTime] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");

  const vendorLogInContext = useContext(VendorLogInContext);

  if (!vendorLogInContext) {
    return <Text>hi</Text>;
  }

  type Vendor = {
      username: string,
      icon_url: string,
      telephone_number: string,
      location_data: string,
      restaurant_type: string
    }

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
  



  const { signedInVendor, setSignedInVendor, signedInVendorType } =
    vendorLogInContext;

  const handleSubmit = async () => {
    try {
      await postReservations(
        time,
        Number(availableSeats),
        vendor.username,
        signedInVendorType
      );
      alert("Reservation submitted successfully!");
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Failed to submit reservation.");
    }
  };

  return (
    <View style={[styles.container, commonStyles.cardShadow]}>
      <Text style={styles.label}>Reservation Time</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter time (e.g. 18:30)"
        value={time}
        onChangeText={setTime}
      />

      <Text style={styles.label}>Available Seats</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number of seats"
        value={availableSeats}
        onChangeText={setAvailableSeats}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={[commonStyles.button, { backgroundColor: colours.primaryGreen }]}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Reservation</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: typography.fontSizes.large,
    backgroundColor: colours.white,
    borderRadius: 12,
    marginTop: typography.fontSizes.large,
  },
  label: {
    fontSize: typography.fontSizes.medium,
    fontWeight: "600", 
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.small,
  },
  input: {
    borderColor: colours.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: typography.fontSizes.medium,
    marginBottom: typography.fontSizes.medium,
    fontSize: typography.fontSizes.medium,
    color: colours.textPrimary,
  },
  button: {
    backgroundColor: colours.primaryGreen,
    paddingVertical: typography.fontSizes.medium,
    paddingHorizontal: typography.fontSizes.large,
    borderRadius: 10,
    alignItems: "center",
    marginTop: typography.fontSizes.medium,
  },
  buttonText: {
    color: colours.white,
    fontSize: typography.fontSizes.large,
    fontWeight: "bold",
  },
});