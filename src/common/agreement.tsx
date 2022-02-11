import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {hp} from './utils';

export const Agreement = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {bottom: insets.bottom || hp(15)}]}>
      <Text style={styles.continue}>By continuing you agree to our</Text>
      <TouchableOpacity>
        <Text style={styles.terms}>Terms & conditions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
  },
  continue: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: hp(25),
  },
  terms: {
    color: 'darkblue',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});
