import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../../common/utils';
import * as Colors from '../../../common/colors';
import {CountryProps} from '../CountryTypes';

export const CountriesCard = ({code, name, onPress}: CountryProps) => {
  return (
    <TouchableOpacity style={styles.countryCard} onPress={onPress}>
      <Text style={styles.countryName}>{`+${code}`}</Text>
      <Text style={styles.countryName}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  countryName: {
    color: 'black',
    fontSize: 17,
    marginRight: wp(5),
  },
  countryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: Colors.Border,
    height: 40,
    paddingVertical: hp(5),
    marginBottom: hp(10),
  },
});
