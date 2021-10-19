import React from 'react';

export type SocialSignupProps = {
  icon: React.ReactNode;
  onPress: () => void;
};

export type CountryProps = {
  code: number;
  // short_name: string;
  name?: string;
  onPress?: () => void;
};

export type CountriesType = Omit<CountryProps, 'onPress'>;

export const Countries: CountriesType[] = [
  {
    code: 234,
    // short_name: 'NGN',
    name: 'Nigeria',
  },
  {
    code: 233,
    // short_name: 'NGN',
    name: 'Ghana',
  },
];
