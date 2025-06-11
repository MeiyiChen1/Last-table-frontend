import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { postUsers } from "../api";
import { colours } from "../styles/colours";
import { commonStyles } from "../styles/commonStyles";
import { typography } from "../styles/typography";


function SignUpForm() {
  const [username, setUsername] = useState("");
  const [icon_url, setIconUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    postUsers(username, icon_url, email, name)
      .then(() => {
        alert("Account created successfully!");
      })
      .catch((error) => {
        console.error(
          "Error creating account:",
          error.response?.data || error.message
        );
        alert("Failed to create account.");
      });
  };

  return (
    <View style={[styles.container, commonStyles.cardShadow]}>
      <Text style={styles.heading}>Make an Account</Text>

      <Text style={styles.label}>Username:</Text>
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

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text>Submit your details to create an account</Text>
      <Button title="Submit" onPress={handleSubmit} />
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