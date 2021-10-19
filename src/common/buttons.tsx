import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import * as Colors from './colors';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  next?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Button: FC<ButtonProps> = ({title, onPress, next, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.doneButton, next && styles.nextButton, style]}>
      <Text style={[styles.doneText, next && styles.nextText, style]}>
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
  } as TextStyle,
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
  modalView: {
    backgroundColor: Colors.White,
    height: 500,
  },
};
