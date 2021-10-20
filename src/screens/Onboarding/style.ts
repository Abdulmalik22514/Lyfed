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
  doneButton: {
    backgroundColor: Colors.White,
    width: '100%',
    height: hp(60),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp(10),
    marginBottom: hp(20),
  },
  doneText: {
    color: 'darkgreen',
    fontWeight: '700',
    letterSpacing: 0.5,
    fontSize: 16,
  },
  bottomSheetStyles: {
    paddingHorizontal: wp(20),
  },
  flag: {
    width: wp(29),
    height: hp(29),
    marginRight: wp(15),
  },
  countryContainer: {
    borderColor: Colors.Border,
    borderWidth: 1,
    borderRadius: 8,
    height: hp(50),
    flexDirection: 'row',
    marginTop: hp(30),
    alignItems: 'center',
    paddingHorizontal: wp(15),
  },
  divider: {
    width: 1,
    backgroundColor: Colors.Ash,
    height: hp(18),
    marginRight: wp(10),
  },
  countryName: {
    color: 'black',
    fontSize: 17,
    marginRight: wp(10),
  },
  textInput: {
    backgroundColor: Colors.Background,
    height: hp(55),
    width: '100%',
    marginVertical: hp(20),
    borderRadius: 8,
    fontSize: 17,
    padding: hp(10),
  },
  modalView: {
    backgroundColor: 'white',
    height: 700,
    borderRadius: 10,
    paddingHorizontal: wp(20),
    paddingTop: hp(20),
  },
  button: {
    backgroundColor: Colors.Purple,
    color: Colors.White,
  },
  orText: {
    fontSize: 17,
    alignSelf: 'center',
    color: Colors.Black,
  },
  signupOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(40),
    marginVertical: hp(20),
  },

  // borderStyleBase: {
  //   width: 30,
  //   height: 45,
  // },

  // borderStyleHighLighted: {
  //   borderColor: '#03DAC6',
  // },

  underlineStyleBase: {
    width: 75,
    height: 55,
    // borderWidth: 0,
    borderRadius: 10,
    backgroundColor: Colors.Border,
    color: 'black',

    // borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    // borderColor: '#03DAC6',
    // bo,
  },
  otpInput: {
    width: '100%',
    height: hp(100),
    marginTop: hp(10),
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyOtp: {
    backgroundColor: Colors.Purple,
    color: 'white',
  },
  editNumber: {
    alignSelf: 'flex-end',
    color: 'red',
    marginTop: hp(10),
    fontSize: 16,
  },
  resend: {
    color: Colors.Purple,
    fontWeight: '500',
  },
  noOtp: {
    fontSize: 17,
    alignSelf: 'center',
    marginTop: hp(15),
  },
});
