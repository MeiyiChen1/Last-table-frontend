import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// const { control, handleSubmit } = useForm();
// console.log(control, handleSubmit);

//setLoading state

//prevent submit after click

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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  const handleFirstName = (value: string) => {
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Make an Account</Text>
        <Text>First Name </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={(value) => {
            setFirstName(value);
          }}
        ></TextInput>
        <Text>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={(value) => {
            setLastName(value);
          }}
        ></TextInput>
        <Text>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
        ></TextInput>
        <Button title="Submit" onPress={handleSubmit}></Button>
      </View>

      {/* <div>
        <form>
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name"></input>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name"></input>
          <label htmlFor="email">Email Address</label>
          <input type="text" name="email"></input>

          <button type="submit">Submit</button>
        </form>
      </div> */}
    </>
  );
}

export default SignUpForm;
