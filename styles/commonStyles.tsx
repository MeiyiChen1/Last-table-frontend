import { StyleSheet } from "react-native";
import { colours } from "./colours";
import { typography } from "./typography";

export const commonStyles = StyleSheet.create({
  centeredText: {
    textAlign: "center",
    color: colours.textPrimary,
  },
  cardShadow: {
    shadowColor: colours.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  button: {
    backgroundColor: colours.primaryGreen,
    paddingVertical: typography.fontSizes.medium,
    paddingHorizontal: typography.fontSizes.xLarge,
    borderRadius: 10,
  },
});