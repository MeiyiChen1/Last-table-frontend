import { getReservations, getReservationsByCategory } from "@/api";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colours } from "../styles/colours";
import { typography } from "../styles/typography";


type Reservations = {
    id: string;
    time: string;
    available_seats: number;
    restaurant_name: string;
    restaurant_type: string;
  };

type SearchComponentProps = {
  setReservations: React.Dispatch<React.SetStateAction<Reservations[]>> 
}



const SearchComponent: React.FC<SearchComponentProps> = ({setReservations}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const categories = ["All", "Fast Food", "Italian", "Japanese"];

  useEffect(() => {
    if (category === "All") {
      getReservations()
      .then(result => {
        //console.log(result.reservations)
        setReservations(result.reservations)
      })
      .catch(err => {
        console.log(err.status)
        console.log(err.response.data.message)
      })
    } else {
      getReservationsByCategory(category)
      .then(result => {
        //console.log(result.reservations)
        setReservations(result.reservations)
      })
      .catch(err => {
        console.log(err.status)
        console.log(err.response.data.message)
        if (err.status === 404) {
          alert(`No ${category} reservations available at the moment...`)
        }
      })
    }
  }, [category])

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
            <Text style={[styles.buttonText, category === item && styles.selectedButtonText]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.lightGreen,
    padding: typography.fontSizes.large,
    borderRadius: 12,
    marginBottom: typography.fontSizes.large,
  },
  label: {
    fontSize: typography.fontSizes.medium,
    fontWeight: "bold",
    color: colours.textPrimary,
    marginBottom: typography.fontSizes.small,
  },
  input: {
    borderWidth: 1,
    borderColor: colours.border,
    borderRadius: 8,
    padding: typography.fontSizes.medium,
    fontSize: typography.fontSizes.medium,
    color: colours.textPrimary,
    backgroundColor: colours.white,
    marginBottom: typography.fontSizes.medium,
  },
  buttonGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  button: {
    backgroundColor: colours.white,
    paddingVertical: typography.fontSizes.small,
    paddingHorizontal: typography.fontSizes.medium,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colours.border,
  },
  selectedButton: {
    backgroundColor: colours.primaryGreen,
    borderColor: colours.primaryGreen,
  },
  buttonText: {
    color: colours.textPrimary,
    fontSize: typography.fontSizes.medium,
  },
  selectedButtonText: {
    color: colours.white,
    fontWeight: "bold",
  },
});
