import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputSytle}
        onChangeText={onTermChange} //just a destructuring
        onEndEditing={onTermSubmit} //just a destructuring
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#FFF",
    marginTop: 10,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
<<<<<<< HEAD
    flexDirection: 'row',
=======
    flexDirection: "row",
>>>>>>> de3f6d9474bc5e3afaac8745ce96d44937fde668
    marginBottom: 10,
  },
  inputSytle: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
