import { View, Text, StyleSheet, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Link } from "@react-navigation/native";

import VendorSignInForm from "@/components/vendor-sign-in-form";

const formStyle = StyleSheet.create({
  alignment: {
    alignItems: "center",
  },
});

function VendorSignInPage() {
  return (
    <View>
      <VendorSignInForm />
    </View>
  );
}

export default VendorSignInPage;
