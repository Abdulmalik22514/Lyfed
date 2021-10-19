import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {DropDown} from '../../assets/Svg';
import {hp, wp} from './utils';
import * as Colors from './colors';

export type DateContainerProps = {
  label: string;
  isYear?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const DateContainer = ({
  label,
  isYear,
  style,
  onPress,
}: DateContainerProps) => {
  return (
    <View style={[styles.container, isYear && styles.isYear, style]}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <DropDown />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(10),
    width: wp(90),
    height: hp(55),
    borderWidth: 0.7,
    borderColor: Colors.Ash,
    borderRadius: 10,
    marginTop: hp(7),
    justifyContent: 'space-between',
  },
  isYear: {
    width: wp(120),
    paddingHorizontal: wp(15),
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: wp(3),
  },
});
