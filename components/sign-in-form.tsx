import { LogInContext } from "@/Contexts";
import { Link, useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getUsers } from "../api";
import { colours } from "../styles/colours";
import { commonStyles } from "../styles/commonStyles";
import { typography } from "../styles/typography";


function SignInForm({}) {
  const navigation = useNavigation();
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

  useEffect(() => {
    setSignedInUser(value);
  }, [value, setSignedInUser]);

  console.log(signedInUser);

   function handleLogOut() {
    setSignedInUser(null);
  }



  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
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
            dropDownDirection="BOTTOM"
            style={styles.dropdown}
            textStyle={styles.dropdownText}
            dropDownContainerStyle={styles.dropdownContainer}
            zIndex={3000}
            zIndexInverse={1000}
        />
        
        <Link screen="user-signup-page" params={{}}>
          <Text style={styles.linkText}>Or Create an Account:</Text>
        </Link>
        </View>

        <View style={styles.buttonContainer}>
      <TouchableOpacity style={commonStyles.smallButton} onPress={handleLogOut}>
          <Text style={commonStyles.smallButtonText}>Sign Out</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={commonStyles.smallButton}
        onPress={() => navigation.navigate("reservations" as never)}
  >
      <Text style={commonStyles.smallButtonText}>Go to Reservations</Text>
      </TouchableOpacity>
      
      </View>
      </ScrollView>
    </View>
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
  }
});