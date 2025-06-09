import VendorSignUpForm from "@/components/restaurant-signup-form";
import SignUpForm from "@/components/signup-form";
import { Text, View } from "react-native";

export default function RestaurantSignUpPage() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#f4f4f4",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Restaurant Sign Up
      </Text>
      <VendorSignUpForm />
    </View>
  );
}
