import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { postUsers } from "../api";
import { colours } from "../styles/colours";
import { commonStyles } from "../styles/commonStyles";
import { typography } from "../styles/typography";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [icon_url, setIconUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [password, setPassword] = useState("");

  const createAccount = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
    } catch {
      setErr(true);
    }
  };

  const handleSubmit = async (
    email: string,
    password: string
    // username: string,
    // icon_url: string,
    // name: string
  ) => {
    console.log(email, password);
    try {
      await createAccount(email, password);
      // await postUsers(username, icon_url, email, name);

      alert("Account created successfully!");
    } catch {
      console.error("Error creating account:");
      alert("Failed to create account.");
    }
  };

  return (
    <View style={[styles.container, commonStyles.cardShadow]}>
      <Text style={styles.heading}>Make an Account</Text>

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Create a Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Icon URL:</Text>
      <TextInput
        style={styles.input}
        value={icon_url}
        onChangeText={setIconUrl}
      />

      <Text style={styles.label}>Your Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text>Submit your details to create an account</Text>
      <Button
        title="Submitttttttttttttttttttttttttt"
        onPress={() => {
          handleSubmit(email, password);
        }}
      />
    </View>
  );
}

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.lightGreen,
    borderRadius: 12,
    padding: typography.fontSizes.large,
    marginVertical: typography.fontSizes.large,
    alignItems: "stretch",
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
  input: {
    borderColor: colours.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: typography.fontSizes.medium,
    marginBottom: typography.fontSizes.medium,
    fontSize: typography.fontSizes.medium,
    color: colours.textPrimary,
    backgroundColor: colours.white,
  },
  footerText: {
    fontSize: typography.fontSizes.small,
    color: colours.textSecondary,
    textAlign: "center",
    marginBottom: typography.fontSizes.medium,
  },
  buttonWrapper: {
    marginTop: typography.fontSizes.small,
  },
});
