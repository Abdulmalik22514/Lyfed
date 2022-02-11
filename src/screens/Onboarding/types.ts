import React from 'react';

export type ItemProps = {
  key: number;
  image: any;
};

export type RenderItemProps = ItemProps[];

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
