import { LogInContext } from "@/Contexts";
import { Link } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getUsers } from "../api";
import { colours } from "../styles/colours";
import { commonStyles } from "../styles/commonStyles";
import { typography } from "../styles/typography";


//setLoading state


function SignInForm({}) {
  const [username, setusername] = useState("");
  //loggedInUser state

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<{ label: string; value: string }[]>([]);

  const logInContext = useContext(LogInContext);

  if (!logInContext) {
    return <Text>hi</Text>;
  }

  const { signedInUser, setSignedInUser } = logInContext;

  useEffect(() => {
    getUsers().then((result) => {
      console.log(result);
      const userMap = result.users.map((user: any) => {
        return {
          label: user.username,
          value: user.id,
        };
      });
      setItems(userMap);
    });
  }, []);

  setSignedInUser(value);
  console.log(signedInUser);

   function handleLogOut() {
    setSignedInUser(null);
  }



  return (
    <>
      <View style={[styles.container, commonStyles.cardShadow]}>
        <Text style={styles.heading}>Sign In</Text>
        <Text>Select your username:</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          dropDownContainerStyle={styles.dropdownContainer}
        />
        {/* <Button title="Submit" onPress={handleSubmit}></Button> */}
        <Link screen="user-signup-page" params={{}}>
          <Text style={styles.linkText}>Or Create an Account:</Text>
        </Link>
      </View>

      <Button title="Sign Out" onPress={handleLogOut}></Button>
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
  },
  dropdownText: {
    fontSize: typography.fontSizes.medium,
    color: colours.textPrimary,
  },
  dropdownContainer: {
    borderColor: colours.border,
    borderRadius: 8,
  },
  linkText: {
    marginTop: typography.fontSizes.medium,
    fontSize: typography.fontSizes.medium,
    color: colours.primaryGreen,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});