import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const categories = ["All", "Fast Food", "Italian", "Japanese"];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Search restaurant..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <Text style={styles.label}>Category</Text>
      <View style={styles.buttonGroup}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.button,
              category === item && styles.selectedButton
            ]}
            onPress={() => setCategory(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
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
});

export default SearchComponent;
