import { View, Text, StyleSheet } from "react-native";
import RestaurantList from "@/components/restaurant-list";

import SignUpForm from "@/components/signup-form";

const formStyle = StyleSheet.create({
  alignment: {
    alignItems: "center",
  },
});

function RestaurantPage() {
  return <RestaurantList />;
}

export default RestaurantPage;
