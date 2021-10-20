import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {hp} from './utils';

export const Agreement = () => {
  return (
    <View>
      <Text style={styles.continue}>By continuing you agree to our</Text>
      <TouchableOpacity>
        <Text style={styles.terms}>Terms & conditions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  continue: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: hp(30),
  },
  terms: {
    color: 'darkblue',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});
