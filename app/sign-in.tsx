import { View, Text, StyleSheet, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
//import { Link } from "@react-navigation/native";
import { Link } from "expo-router";
import SignInForm from "@/components/sign-in-form";
import { commonStyles } from "@/styles/commonStyles";
import { ScrollView, StyleSheet, View } from "react-native";


export default function UserSignInPage() {
  return (

    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.formBox, commonStyles.cardShadow]}>
        <SignInForm />
      </View>
    </ScrollView>

    <View>
      <SignInForm />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  formBox: {
    backgroundColor: "#fff", 
    borderRadius: 10,
    padding: 20,
  },
});
