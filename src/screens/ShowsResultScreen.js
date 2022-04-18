import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import yelp from '../api/yelp';

const ShowsResultScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  // getResult(id); //Bad code.

  useEffect(() => {
    getResult(id);
  }, []);
  return (
    <View>
      <Text>From Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowsResultScreen;
