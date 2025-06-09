import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import SignInForm from "@/components/sign-in-form";

const formStyle = StyleSheet.create({
  alignment: {
    alignItems: "center",
  },
});

function UserSignInPage() {
  return <SignInForm />;
}

export default UserSignInPage;
