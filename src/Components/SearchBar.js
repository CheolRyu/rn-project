import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBar}>
      <Feather name='search' style={styles.icon} />
      <TextInput
        autoCorrect={false}
        placeholder='Search'
        style={styles.inputSytle}
        onChangeText={onTermChange} //just a destructuring
        onEndEditing={onTermSubmit} //just a destructuring
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#FFF',
    marginTop: 10,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputSytle: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
