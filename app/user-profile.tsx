import { LogInContext } from "@/Contexts";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { getReservationById, getUser } from "../api";
import UserProfileInfo from "../components/user-profile-info";
import UserProfileReservations from "../components/user-profile-reservation";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";

interface Reservation {
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

export default function UserProfile() {

  const [reservations, setReservations] = useState<Reservation[]>([]);
  const logInContext = useContext(LogInContext);

  if (!logInContext) {
    return <Text>hi</Text>;
  }

  const [user, setUser] = useState<User>({
    name: "test",
    email: "test",
    icon_url: "test",
    username: "test"
  })
  
  const { signedInUser, setSignedInUser } = logInContext;
  console.log(signedInUser, "signed in user")

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


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <UserProfileInfo user={user} />
      <UserProfileReservations reservations={reservations} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: typography.fontSizes.large,
    marginTop: typography.fontSizes.large,
  },
  title: {
    fontSize: typography.fontSizes.xLarge,
    fontWeight: "bold",
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.large,
    textAlign: "center",
  },
});