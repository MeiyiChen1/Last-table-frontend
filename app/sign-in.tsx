import { View, Text, StyleSheet, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Link } from "@react-navigation/native";

import SignInForm from "@/components/sign-in-form";

const formStyle = StyleSheet.create({
  alignment: {
    alignItems: "center",
  },
});

function UserSignInPage() {
  return (
    <View>
      <SignInForm />
      <Link screen="reservations" params={{}}>
        <Button title="Go to Reservations"></Button>
      </Link>
    </View>
  );
}

export default UserSignInPage;
