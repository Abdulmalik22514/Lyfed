import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as Colors from './colors';
import {hp, wp} from './utils';

export type HeaderProps = {
  heading: string;
  description: string;
};

export const Header = ({heading, description}: HeaderProps) => {
  return (
    <View>
      <Text style={styles.bottomSheetNumber}>{heading}</Text>
      <Text style={styles.sendOTP}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.Black,
    marginTop: hp(10),
  },
  sendOTP: {
    marginTop: hp(15),
    fontSize: 17,
    fontWeight: '400',
    lineHeight: hp(22),
    color: Colors.Ash,
    // textAlign: 'justify',
  },
});
