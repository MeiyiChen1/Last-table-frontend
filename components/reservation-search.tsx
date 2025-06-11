import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type SearchProps = {
  category: string,
  setSearchTerm: Function,
  setCategory: Function
}

export default function ReservationSearch(props: SearchProps) {

  const categories = ["All", "Fast Food", "Italian", "Japanese"];

  return (
    <View>
      <TextInput
        onSubmitEditing={(event) => {
          props.setSearchTerm(event.nativeEvent.text);
        }}
      ></TextInput>

      <Text style={styles.label}>Category</Text>
      <View style={styles.buttonGroup}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, props.category === item && styles.selectedButton]}
            onPress={() => props.setCategory(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  button: {
    backgroundColor: "#eee",
    padding: 8,
    margin: 4,
    borderRadius: 6,
  },
  selectedButton: {
    backgroundColor: "#007AFF",
  },
  buttonText: {
    color: "black",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
  },
});
