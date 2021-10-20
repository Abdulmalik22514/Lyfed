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
    fontSize: 19,
    fontWeight: '700',
    color: Colors.Black,
    marginTop: hp(20),
  },
  sendOTP: {
    marginTop: hp(20),
    fontSize: 16,
    fontWeight: '400',
    lineHeight: hp(22),
  },
});
