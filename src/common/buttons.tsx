import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import * as Colors from './colors';
import {hp} from './utils';

type ButtonPropsType = {
  title: string;
  onPressButton?: () => void;
  isNext?: boolean;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

export const Button: FC<ButtonPropsType> = ({
  title,
  onPressButton,
  isNext,
  style,
  styleText,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressButton}
      style={[styles.doneButton, isNext && styles.nextButton, style]}>
      <Text style={[styles.doneText, isNext && styles.nextText, styleText]}>
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
    height: hp(57),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp(10),
    marginBottom: hp(20),
  },
  nextButton: {
    backgroundColor: 'darkgreen',
  },
};
