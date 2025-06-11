import { VendorLogInContext } from "@/Contexts";
import { Link } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getVendors } from "../api";
import { colours } from "../styles/colours";
import { commonStyles } from "../styles/commonStyles";
import { typography } from "../styles/typography";

//setLoading state


function VendorSignInForm({}) {
  const [username, setusername] = useState("");
  //loggedInUser state

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<
    { label: string; value: string; cuisine: string }[]
  >([]);
  // const [cuisine, setCuisine] = useState<string | null>(null);

  const vendorLogInContext = useContext(VendorLogInContext);

  if (!vendorLogInContext) {
    return <Text>hi</Text>;
  }

  const {
    signedInVendor,
    setSignedInVendor,
    signedInVendorType,
    setSignedInVendorType,
  } = vendorLogInContext;

  function handleLogOut() {
    setSignedInVendor(null);
    setSignedInVendorType(null);
  }

  useEffect(() => {
    getVendors().then((result) => {
      console.log(result);
      const vendorMap = result.map((vendor: any) => {
        return {
          label: vendor.username,
          value: vendor.username,
          cuisine: vendor.restaurant_type,
        };
      });
      setItems(vendorMap);
    });
  }, []);

  useEffect(() => {
    setSignedInVendor(value);
    if (value) {
      const selectedVendor = items.find((item) => item.value === value);
      if (selectedVendor) {
        setSignedInVendorType(selectedVendor.cuisine);
      }
    }
  }, [value, items]);

  console.log(signedInVendor, "<<<<<<<<<<<<", signedInVendorType);

  return (
    <>
      <View style={[styles.container, commonStyles.cardShadow]}>
        <Text style={styles.heading}>Vendor Sign In</Text>
        <Text style={styles.label}>Select your username:</Text>
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
        <Link screen="restaurant-signup" params={{}}>
          <Text style={styles.linkText}>Or Create an Account:</Text>
        </Link>
        <Button title="Sign Out" onPress={handleLogOut}></Button>
        {/* <Button title="Submit" onPress={handleSubmit}></Button> */}
      </View>
    </>
  );
}

export default VendorSignInForm;

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
