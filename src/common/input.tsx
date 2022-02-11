import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';
import {hp, wp} from './utils';
import * as Colors from './colors';

export type InputProps = {
  label: string;
  isPhone?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Input = ({
  label,
  isPhone,
  style,
  ...rest
}: InputProps & TextInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {isPhone ? (
        <View style={[styles.textInput, isPhone && styles.isPhone]}>
          <Text style={styles.countryCode}>+91</Text>
          <View style={styles.divider} />
          <TextInput
            placeholder="Your 10-digit phone number"
            style={styles.phoneInput}
            keyboardType="number-pad"
          />
        </View>
      ) : (
        <TextInput {...rest} style={styles.textInput} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp(20),
  },
  phoneInput: {
    fontSize: 17,
    paddingRight: wp(10),
  },
  countryCode: {
    color: 'black',
    fontSize: 17,
    marginRight: wp(7),
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
  divider: {
    width: 1,
    backgroundColor: Colors.Ash,
    height: hp(18),
    marginRight: wp(7),
  },
  isPhone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
