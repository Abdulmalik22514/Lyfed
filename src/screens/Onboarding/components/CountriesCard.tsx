import React from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {hp, wp} from '../../../common/utils';
import * as Colors from '../../../common/colors';
import {CountryProps} from '../types';

export const CountriesCard = ({
  code,
  short_name,
  name,
  imageLink,
  onPress,
}: CountryProps) => {
  return (
    <TouchableOpacity style={styles.countryCard} onPress={onPress}>
      {imageLink && (
        <Image
          source={{
            uri: imageLink,
            headers: {
              Accept: '*/*',
            },
          }}
          style={styles.flag}
          resizeMode="contain"
        />
      )}
      <Text style={styles.countryName}>{code}</Text>
      <Text style={styles.countryName}>{short_name}</Text>

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
    height: hp(40),
    paddingVertical: hp(5),
    marginBottom: hp(10),
  },
  flag: {
    width: wp(29),
    height: hp(29),
    marginRight: wp(12),
  },
});
