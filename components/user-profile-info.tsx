import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface UserProfile {
  name: string;
  email: string;
  icon_url: string;
}

interface Props {
  user: UserProfile;
}

export default function UserProfileInfo({ user }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.icon_url }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginBottom: 20 },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginTop: 12,
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: "#333",
  },
});
