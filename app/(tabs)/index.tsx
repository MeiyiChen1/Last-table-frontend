import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colours } from "../../styles/colours";
import { typography } from "../../styles/typography";

import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  "sign-in": undefined;
  "vendor-sign-in": undefined;
};

export default function Index() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome-table.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.text}>Are you a: </Text>
      <TouchableOpacity onPress={() => navigation.navigate("sign-in")}>
        <Text style={styles.buttonText}>Hungry Customer</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Or a:</Text>
      <TouchableOpacity onPress={() => navigation.navigate("vendor-sign-in")}>
        <Text style={styles.buttonText}>Restaurant with a last minute cancellation</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
    alignItems: "center",
    justifyContent: "center",
    padding: typography.fontSizes.large,
  },
  title: {
    fontSize: typography.fontSizes.xLarge,
    fontWeight: "bold",
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.medium,
    textAlign: "center",
  },
  text: {
    fontSize: typography.fontSizes.medium,
    color: colours.textSecondary,
    textAlign: "center",
    marginBottom: typography.fontSizes.small,
  },
  link: {
    fontSize: typography.fontSizes.medium,
    color: colours.primaryGreen,
    textAlign: "center",
    textDecorationLine: "underline",
    marginBottom: typography.fontSizes.medium,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: typography.fontSizes.large,
  },
  buttonText: {
    fontSize: typography.fontSizes.medium,
    color: colours.primaryGreen,
    textAlign: "center",
    marginVertical: typography.fontSizes.small,
    fontWeight: "bold",
  },
});