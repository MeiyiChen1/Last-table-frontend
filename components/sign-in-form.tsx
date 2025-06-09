import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { postUsers, getUsers } from "../api";
import DropDownPicker from "react-native-dropdown-picker";

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

function SignInForm() {
  const [username, setusername] = useState("");
  //loggedInUser state

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<{ label: string; value: string }[]>([]);
  const [loggedInUser, setLoggedInUser] = useState(false);

  useEffect(() => {
    getUsers().then((result) => {
      console.log(result.users);
      const userMap = result.users.map((user: any) => {
        return {
          label: user.username,
          value: user.id,
        };
      });
      setItems(userMap);
    });
  }, []);

  //can just use the variable 'value' as the loggedInUser state????
  //do I need a useContext now to use this state in the favourite button feature????????

  console.log(value);
  return (
    <>
      <View style={styles.container}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        {/* <Button title="Submit" onPress={handleSubmit}></Button> */}
      </View>
    </>
  );
}

export default SignInForm;
