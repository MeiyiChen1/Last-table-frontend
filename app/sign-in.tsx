import { View, Text, StyleSheet, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
//import { Link } from "@react-navigation/native";
import { Link } from "expo-router";


import SignInForm from "@/components/sign-in-form";

const formStyle = StyleSheet.create({
  alignment: {
    alignItems: "center",
  },
});

function UserSignInPage() {
  return (
    <View>
      <SignInForm />
    </View>
  );
}

export default UserSignInPage;
