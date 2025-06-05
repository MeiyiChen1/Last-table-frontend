import { View, Text, StyleSheet } from "react-native";
import SignUpForm from "@/components/sign-up-form";

const formStyle = StyleSheet.create({
  alignment: {
    alignItems: "center",
  },
});

function UserSignUpPage() {
  return <SignUpForm />;
}

export default UserSignUpPage;
