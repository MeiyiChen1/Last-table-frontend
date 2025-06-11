import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { postVendor } from "../api";
import { colours } from "../styles/colours";
import { commonStyles } from "../styles/commonStyles";
import { typography } from "../styles/typography";

function VendorSignUpForm() {
  const [username, setUsername] = useState("");
  const [icon_url, setIconUrl] = useState("");
  const [telephone_number, setTelephone_number] = useState("");
  const [location_data, setLocation_data] = useState("");
  const [restaurant_type, setRestaurant_type] = useState("");

  const handleSubmit = () => {
    postVendor(
      username,
      icon_url,
      telephone_number,
      location_data,
      restaurant_type
    )
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

      <Text style={styles.label}>Contact Number:</Text>
      <TextInput
        style={styles.input}
        value={telephone_number}
        onChangeText={setTelephone_number}
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={location_data}
        onChangeText={setLocation_data}
      />

      <Text style={styles.label}>Cuisine:</Text>
      <TextInput
        style={styles.input}
        value={restaurant_type}
        onChangeText={setRestaurant_type}
      />

      <Text style={styles.footerText}>Submit your details to create an account</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

export default VendorSignUpForm;

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
