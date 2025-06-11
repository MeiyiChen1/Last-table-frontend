import { StyleSheet, View } from "react-native";
//import { Link } from "@react-navigation/native";
import SignInForm from "@/components/sign-in-form";
import { commonStyles } from "@/styles/commonStyles";
import { ScrollView } from "react-native";
//import { Link } from "@react-navigation/native";

export default function UserSignInPage() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.formBox, commonStyles.cardShadow]}>
          <SignInForm />
        </View>
      </ScrollView>
    </>
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
