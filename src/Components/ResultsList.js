<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> de3f6d9474bc5e3afaac8745ce96d44937fde668
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
<<<<<<< HEAD
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from '../Components/ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
=======
} from "react-native";
import ResultDetail from "../Components/ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  console.log(results);
>>>>>>> de3f6d9474bc5e3afaac8745ce96d44937fde668
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.results}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
<<<<<<< HEAD
                navigation.navigate('Detail', { id: item.id });
              }}>
=======
                navigation.navigate("ResultsShowScreen");
              }}
            >
>>>>>>> de3f6d9474bc5e3afaac8745ce96d44937fde668
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 15,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
