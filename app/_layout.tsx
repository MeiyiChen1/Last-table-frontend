import { LogInContext, VendorLogInContext } from "@/Contexts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import Tabs from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function RootLayout() {
  const [signedInUser, setSignedInUser] = useState<string | null>(null);
  const [signedInVendor, setSignedInVendor] = useState<string | null>(null);
  const [signedInVendorType, setSignedInVendorType] = useState<string | null>(
    null
  );


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

  // Save signedInVendor to AsyncStorage whenever it changes
  useEffect(() => {
    if (signedInVendor) {
      AsyncStorage.setItem("signedInVendor", signedInVendor);
    } else {
      AsyncStorage.removeItem("signedInVendor");
    }
  }, [signedInVendor]);

  useEffect(() => {
    AsyncStorage.getItem("signedInVendorType").then((user) => {
      if (user) setSignedInVendorType(user);
    });
  }, []);

  // Save signedInVendorType to AsyncStorage whenever it changes
  useEffect(() => {
    if (signedInVendorType) {
      AsyncStorage.setItem("signedInVendorType", signedInVendorType);
    } else {
      AsyncStorage.removeItem("signedInVendorType");
    }
  }, [signedInVendorType]);





  




  return (
    <>
    <VendorLogInContext.Provider
      value={{
        signedInVendor,
        setSignedInVendor,
        signedInVendorType,
        setSignedInVendorType,
      }}
    >
      <LogInContext.Provider value={{ signedInUser, setSignedInUser }}>

          <Stack>

          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

          <Stack.Screen name="index" options={{ title: "", headerShown: false}} />

          </Stack>
 
      </LogInContext.Provider>
    </VendorLogInContext.Provider>
    </>
  );
}
