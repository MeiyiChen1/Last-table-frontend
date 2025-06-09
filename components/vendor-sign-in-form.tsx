import { useState, useEffect, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { postUsers, getVendors } from "../api";
import DropDownPicker from "react-native-dropdown-picker";
import { VendorLogInContext } from "@/Contexts";
import { Link } from "@react-navigation/native";

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

function VendorSignInForm({}) {
  const [username, setusername] = useState("");
  //loggedInUser state

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<{ label: string; value: string }[]>([]);

  const vendorLogInContext = useContext(VendorLogInContext);

  if (!vendorLogInContext) {
    return <Text>hi</Text>;
  }

  const { signedInVendor, setSignedInVendor } = vendorLogInContext;

  useEffect(() => {
    getVendors().then((result) => {
      console.log(result);
      const vendorMap = result.map((vendor: any) => {
        return {
          label: vendor.username,
          value: vendor.id,
        };
      });
      setItems(vendorMap);
    });
  }, []);

  setSignedInVendor(value);
  console.log(signedInVendor, "<<<<<<<<<<<<");

  return (
    <>
      <View style={styles.container}>
        <Text>Select your username:</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <Link screen="restaurant-signup" params={{}}>
          <Text>Or Create an Account:</Text>
        </Link>
        {/* <Button title="Submit" onPress={handleSubmit}></Button> */}
      </View>
    </>
  );
}

export default VendorSignInForm;
