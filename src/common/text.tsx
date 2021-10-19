import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Colors from './colors';

type TextHeaderProps = {
  label: string;
};

export const TextHeader = ({label}: TextHeaderProps) => {
  return <Text style={styles.label}>{label}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    color: Colors.Black,
  },
});
