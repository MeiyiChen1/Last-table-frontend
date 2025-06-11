import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";

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
  container: {
    backgroundColor: colours.lightGreen,
    borderRadius: 12,
    padding: typography.fontSizes.large,
    alignItems: "center",
    marginVertical: typography.fontSizes.large,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colours.border,
    marginBottom: typography.fontSizes.medium,
  },
  name: {
    fontSize: typography.fontSizes.large,
    fontWeight: "bold",
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.small,
  },
  email: {
    fontSize: typography.fontSizes.medium,
    color: colours.textSecondary,
  },
});