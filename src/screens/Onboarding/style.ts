import * as Colors from '../../common/colors';
import {StyleSheet} from 'react-native';
import {hp, wp} from '../../common/utils';

export const OnboardingStyles = StyleSheet.create({
  slide: {
    width: wp(360),
    height: hp(250),
    marginTop: hp(150),
    marginBottom: hp(30),
    alignSelf: 'center',
  },
  description: {
    fontSize: 17,
    color: Colors.White,
    fontWeight: '300',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: hp(20),
  },
  activeDotStyle: {
    backgroundColor: Colors.White,
    width: wp(28),
    height: hp(10),
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.Green,
    paddingTop: hp(10),
  },
  neverMiss: {
    color: Colors.White,
    fontSize: 25,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: hp(30),
  },
  logo: {
    fontSize: 30,
    color: Colors.White,
    fontWeight: '900',
    alignSelf: 'center',
  },
  bottomSheetStyles: {
    paddingHorizontal: wp(20),
  },
  modalView: {
    backgroundColor: 'white',
    height: 700,
    borderRadius: 10,
    paddingHorizontal: wp(20),
    paddingTop: hp(20),
  },
});
