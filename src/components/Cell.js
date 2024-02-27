// src/components/Cell.js
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Cell = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 30,
    height: 30,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  text: {
    color: 'white',
  },
});

export default Cell;
