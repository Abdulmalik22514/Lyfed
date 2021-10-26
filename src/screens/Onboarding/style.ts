import * as Colors from '../../common/colors';
import {StyleSheet} from 'react-native';
import {hp, wp} from '../../common/utils';

export const OnboardingStyles = StyleSheet.create({
  detailsHeader: {
    marginBottom: hp(20),
  },
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
  },
  sendOTPButton: {
    color: Colors.White,
  },
  orText: {
    fontSize: 17,
    alignSelf: 'center',
    color: Colors.Black,
    fontWeight: '500',
  },
  signupOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(40),
    marginVertical: hp(20),
  },
  underlineStyleBase: {
    width: 76,
    height: 60,
    borderRadius: 10,
    backgroundColor: Colors.Border,
    color: 'black',
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  otpInput: {
    width: '100%',
    height: hp(110),
    marginTop: hp(10),
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButton: {
    backgroundColor: Colors.Purple,
  },
  verifyButtonTitle: {
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
    height: hp(20),
  },
  noOtp: {
    fontSize: 17,
    alignSelf: 'center',
    marginTop: hp(15),
  },
  profilePicture: {
    color: Colors.Black,
    fontSize: 18,
  },
  optionalText: {
    color: Colors.Ash,
  },
  pictureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(40),
    width: '100%',
    height: hp(55),
    borderWidth: 0.7,
    borderColor: Colors.Ash,
    borderRadius: 10,
    marginTop: hp(7),
  },
  pictureText: {
    color: 'darkblue',
    fontSize: 17,
    marginLeft: wp(20),
    fontWeight: '600',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signupButton: {
    borderWidth: 0.7,
    borderColor: Colors.Ash,
    marginTop: hp(17),
  },
  genderSelection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(20),
    width: '100%',
    height: hp(55),
    borderWidth: 0.7,
    borderColor: Colors.Ash,
    borderRadius: 10,
    marginTop: hp(7),
    justifyContent: 'space-between',
  },
  gender: {
    fontSize: 17,
  },
  accountButton: {
    backgroundColor: Colors.Purple,
    marginTop: hp(20),
  },
  textStyle: {
    color: 'white',
  },
  nextStage3: {
    color: Colors.Black,
  },
});
