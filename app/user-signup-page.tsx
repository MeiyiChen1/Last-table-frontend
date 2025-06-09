import SignUpForm from "@/components/signup-form";
import { StyleSheet, Text, View } from "react-native";

const formStyle = StyleSheet.create({
  alignment: {
    alignItems: "center",
  },
});

export default function UserSignUpPage() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign Up</Text>
      <SignUpForm />
    </View>
  );
}


