import React from 'react';
import * as Images from '../../../assets/images';
import {FacebookIcon, GoogleIcon, MailIcon} from '../../../assets/Svg';
import {CountriesType, RenderItemProps} from './types';

export const SLIDES: RenderItemProps = [
  {
    key: 1,
    image: Images.Onboarding2,
  },
  {
    key: 2,
    image: Images.Onboarding2,
  },
  {
    key: 3,
    image: Images.Onboarding2,
  },
  {
    key: 4,
    image: Images.Onboarding2,
  },
];

export const GENDER = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
];

export const CountryDetails: CountriesType[] = [
  {
    code: '+234',
    short_name: 'NGN',
    name: 'Nigeria',
  },
  {
    code: '+233',
    short_name: 'GH',
    name: 'Ghana',
  },
];

export const SocialSignupList = [
  {icon: <GoogleIcon />},
  {icon: <MailIcon />},
  {icon: <FacebookIcon />},
];
