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
  container: {
  alignItems: 'center',
  backgroundColor: colours.white,
  paddingVertical: typography.fontSizes.large,
},
buttonText: {
  color: colours.white,
  fontWeight: "bold",
  fontSize: typography.fontSizes.large,
  textAlign: "center",
},
actionContainer: {
  flexDirection: "row",
  justifyContent: "center",
  gap: 12,
  marginTop: "auto",
  paddingBottom: 30,
},

smallButton: {
  backgroundColor: colours.primaryGreen,
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 8,
},

smallButtonText: {
  color: colours.white,
  fontWeight: "bold",
  fontSize: typography.fontSizes.medium,
  textAlign: "center",
},

});