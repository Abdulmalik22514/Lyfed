import React from 'react';

export type SocialSignupProps = {
  icon: React.ReactNode;
  onPress?: () => void;
};

export type CountryProps = {
  code: string;
  short_name: string;
  name?: string;
  id?: string;
  imageLink?: string;
  onPress?: () => void;
};

export type CountriesType = Omit<CountryProps, 'onPress'>;

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
