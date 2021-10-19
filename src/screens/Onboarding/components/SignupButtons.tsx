import React from 'react';
import {SocialSignupProps} from '../CountryTypes';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {FacebookIcon, GoogleIcon, MailIcon} from '../../../../assets/Svg';
import {hp, wp} from '../../../common/utils';
import * as Colors from '../../../common/colors';

export const SocialSignupList = [
  {icon: <GoogleIcon />},
  {icon: <MailIcon />},
  {icon: <FacebookIcon />},
];

export const SocialSignupCard = ({icon, onPress}: SocialSignupProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.signupButtons}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signupButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(50),
    height: hp(50),
    borderRadius: 25,
    borderColor: Colors.Gray,
    borderWidth: 1,
  },
});
