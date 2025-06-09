import { Text, View } from "react-native";
import { Link } from "@react-navigation/native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Welcome!</Text>
      <Text>Are you a: </Text>
      <Link screen="sign-in" params={{}}>
        <Text>Hungry Customer</Text>
      </Link>
      <Text>Or a:</Text>
      <Link screen="vendor-sign-in" params={{}}>
        <Text>Restaurant with a last minute cancellation</Text>
      </Link>
    </View>
  );
}
