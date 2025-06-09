import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import VendorSignInForm from "@/components/vendor-sign-in-form";

const formStyle = StyleSheet.create({
  alignment: {
    alignItems: "center",
  },
});

function VendorSignInPage() {
  return <VendorSignInForm />;
}

export default VendorSignInPage;
