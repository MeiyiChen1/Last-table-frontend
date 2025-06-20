import { LogInContext } from "@/Contexts";
import { Link, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getUsers } from "../api";
import { colours } from "../styles/colours";
import { commonStyles } from "../styles/commonStyles";
import { typography } from "../styles/typography";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignInForm({}) {
  const navigation = useNavigation();
  const [username, setusername] = useState("");
  //loggedInUser state

  const [open, setOpen] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [items, setItems] = useState<{ label: string; value: string }[]>([]);
  const [err, setErr] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginFunction = async (loginEmail: string, loginPassword: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(userCredential);
    } catch {
      setErr(true);
    }
  };
  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={[styles.container, commonStyles.cardShadow]}>
            <Text style={styles.heading}>Sign In</Text>

            <Text style={styles.label}>Email:</Text>
            <TextInput
              // style={styles.input}
              value={emailValue}
              onChangeText={setEmailValue}
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
              // style={styles.input}
              value={passwordValue}
              onChangeText={setPasswordValue}
            />
            <Button
              title="Log In"
              onPress={async () => {
                await loginFunction(emailValue, passwordValue);
              }}
            />
            {err ? <Text>Invalid email and/or password</Text> : null}
            <Link screen="user-signup-page" params={{}}>
              <Text style={styles.linkText}>Or Create an Account:</Text>
            </Link>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.lightGreen,
    borderRadius: 12,
    padding: typography.fontSizes.large,
    marginVertical: typography.fontSizes.large,
    alignItems: "stretch",
    zIndex: 1,
  },
  heading: {
    fontSize: typography.fontSizes.xLarge,
    fontWeight: "bold",
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.large,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  label: {
    fontSize: typography.fontSizes.medium,
    fontWeight: "600",
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.small,
  },
  dropdown: {
    borderColor: colours.border,
    borderRadius: 8,
    paddingHorizontal: typography.fontSizes.small,
    backgroundColor: colours.white,
    marginBottom: typography.fontSizes.medium,
    zIndex: 1000,
  },
  dropdownText: {
    fontSize: typography.fontSizes.medium,
    color: colours.textPrimary,
  },
  dropdownContainer: {
    borderColor: colours.border,
    borderRadius: 8,
    zIndex: 1000,
  },
  linkText: {
    marginTop: typography.fontSizes.medium,
    fontSize: typography.fontSizes.medium,
    color: colours.primaryGreen,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
});
