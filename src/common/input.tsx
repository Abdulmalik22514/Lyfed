import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {hp, wp} from './utils';
import * as Colors from './colors';

export type InputProps = {
  label: string;
};

export const Input = ({label, ...rest}: InputProps & TextInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...rest} style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp(15),
  },
  label: {
    fontSize: 18,
    color: Colors.Black,
  },
  textInput: {
    backgroundColor: Colors.BgColor,
    borderRadius: 9,
    height: hp(55),
    marginTop: hp(7),
    fontSize: 17,
    paddingLeft: wp(20),
    paddingRight: wp(10),
  },
});
