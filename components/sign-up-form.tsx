import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { postUsers } from "../api";

//setLoading state

const styles = StyleSheet.create({
  input: {
    height: 20,
    width: 180,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
  },
  heading: {
    marginBottom: 20,
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
  },
});

function SignUpForm() {
  const [username, setusername] = useState("");
  const [icon_url, setIcon_url] = useState("");
  const [favourites, setfavourites] = useState("");

  const handleSubmit = () => {
    postUsers(username, icon_url, favourites);
  };
  console.log(username, icon_url, favourites);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Make an Account</Text>
        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(value) => {
            setusername(value);
          }}
        ></TextInput>
        <Text>Icon URL:</Text>
        <TextInput
          style={styles.input}
          value={icon_url}
          onChangeText={(value) => {
            setIcon_url(value);
          }}
        ></TextInput>
        <Text>Favourites:</Text>
        <TextInput
          style={styles.input}
          value={favourites}
          onChangeText={(value) => {
            setfavourites(value);
          }}
        ></TextInput>
        <Button title="Submit" onPress={handleSubmit}></Button>
      </View>
    </>
  );
}

export default SignUpForm;
