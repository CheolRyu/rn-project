<<<<<<< HEAD
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';
const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
=======
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";
const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
>>>>>>> de3f6d9474bc5e3afaac8745ce96d44937fde668
  const [searchApi, results, errorMessage] = useResults();
  const filteredPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
<<<<<<< HEAD
        <ResultsList results={filteredPrice('$')} title='Cost Effective' />
        <ResultsList results={filteredPrice('$$')} title='Bit Pricier' />
        <ResultsList results={filteredPrice('$$$')} title='Big Spender' />
=======
        <ResultsList
          results={filteredPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filteredPrice("$$")}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultsList
          results={filteredPrice("$$$")}
          title="Big Spender"
          navigation={navigation}
        />
>>>>>>> de3f6d9474bc5e3afaac8745ce96d44937fde668
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
