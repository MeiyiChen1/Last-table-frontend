import RestaurantList from "@/components/restaurant-list";
import { StyleSheet } from "react-native";
import { colours } from "../../styles/colours";
import { typography } from "../../styles/typography";

const formStyle = StyleSheet.create({
  alignment: {
    alignItems: "center",
  },
});

function RestaurantPage() {
  return <RestaurantList />;
}

export default RestaurantPage;

const styles = StyleSheet.create({
  container: {
    padding: typography.fontSizes.large,
    backgroundColor: colours.white,
  },
  title: {
    fontSize: typography.fontSizes.xLarge,
    fontWeight: "bold",
    color: colours.textPrimary,
    textAlign: "center",
    marginBottom: typography.fontSizes.small,
  },
  subtitle: {
    fontSize: typography.fontSizes.medium,
    color: colours.textSecondary,
    textAlign: "center",
    marginBottom: typography.fontSizes.large,
  },
});