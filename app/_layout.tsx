import { Stack } from "expo-router";
import { LogInContext, VendorLogInContext } from "@/Contexts";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [signedInUser, setSignedInUser] = useState<string | null>(null);
  const [signedInVendor, setSignedInVendor] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem("signedInUser").then((user) => {
      if (user) setSignedInUser(user);
    });
  }, []);

  // Save signedInUser to AsyncStorage whenever it changes
  useEffect(() => {
    if (signedInUser) {
      AsyncStorage.setItem("signedInUser", signedInUser);
    } else {
      AsyncStorage.removeItem("signedInUser");
    }
  }, [signedInUser]);

  useEffect(() => {
    AsyncStorage.getItem("signedInVendor").then((user) => {
      if (user) setSignedInVendor(user);
    });
  }, []);

  // Save signedInUser to AsyncStorage whenever it changes
  useEffect(() => {
    if (signedInVendor) {
      AsyncStorage.setItem("signedInVendor", signedInVendor);
    } else {
      AsyncStorage.removeItem("signedInVendor");
    }
  }, [signedInVendor]);

  return (
    <VendorLogInContext.Provider value={{ signedInVendor, setSignedInVendor }}>
      <LogInContext.Provider value={{ signedInUser, setSignedInUser }}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Index" }} />

          <Stack.Screen
            name="reservations"
            options={{ title: "Reservations" }}
          />
          <Stack.Screen
            name="restaurant-details"
            options={{ title: "Restaurant Details" }}
          />
          <Stack.Screen name="restaurants" options={{ title: "Restaurants" }} />
          <Stack.Screen name="sign-in" options={{ title: "Sign In" }} />
          <Stack.Screen
            name="user-profile"
            options={{ title: "User Profile" }}
          />
          <Stack.Screen
            name="user-signup-page"
            options={{ title: "Create an Account" }}
          />
        </Stack>
      </LogInContext.Provider>
    </VendorLogInContext.Provider>
  );
}
