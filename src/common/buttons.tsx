import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleProp, ViewStyle} from 'react-native';
import * as Colors from './colors';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  isNext?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Button: FC<ButtonProps> = ({title, onPress, isNext, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.doneButton, isNext && styles.nextButton, style]}>
      <Text style={[styles.doneText, isNext && styles.nextText, style]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  doneText: {
    color: 'darkgreen',
    fontWeight: '700',
    letterSpacing: 0.5,
    fontSize: 16,
  },
  nextText: {
    color: Colors.White,
  },
  doneButton: {
    backgroundColor: Colors.White,
    width: '100%',
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: 'darkgreen',
  },
};
