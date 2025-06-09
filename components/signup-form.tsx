import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { postUsers } from "../api";

const styles = StyleSheet.create({
  input: {
    height: 20,
    width: 180,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
    marginBottom: 10,
    paddingHorizontal: 5,
    fontSize: 16,
  },
  heading: {
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: "blue",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
    padding: 20,
    marginTop: 20,
  },
});

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
    <View style={styles.container}>
      <Text style={styles.heading}>Make an Account</Text>

      <Text>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <Text>Icon URL:</Text>
      <TextInput
        style={styles.input}
        value={icon_url}
        onChangeText={setIconUrl}
      />

      <Text>email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text>Submit your details to create an account</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

export default SignUpForm;
