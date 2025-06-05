import { View, Text, StyleSheet } from "react-native";
import SignUpForm from "@/components/SignUpForm";

const formStyle = StyleSheet.create({
  alignment: {
    alignItems: "center",
  },
});

function UserSignUpPage() {
  return <SignUpForm style={formStyle.alignment} />;
}

export default UserSignUpPage;
