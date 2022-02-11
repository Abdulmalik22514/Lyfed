import OTPInputView from '@twotalltotems/react-native-otp-input';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button} from '../../../common/buttons';
import {Header} from '../../../common/header';
import * as Colors from '../../../common/colors';
import {hp} from '../../../common/utils';

type StageTwoProp = {
  onWrongNumber: () => void;
  otpCode: string;
  onOtpChanged: () => void;
  onVerify: () => void;
  onResend: () => void;
  phoneNumber: string;
};

const SignupStage2 = (props: StageTwoProp) => {
  const {
    onWrongNumber,
    otpCode,
    onOtpChanged,
    onVerify,
    onResend,
    phoneNumber,
  } = props;
  return (
    <>
      <Header
        heading="Verify OTP"
        description={`Please enter the 4-digit OTP sent to you at +234-${phoneNumber}`}
      />
      <TouchableOpacity activeOpacity={0.7} onPress={onWrongNumber}>
        <Text style={styles.editNumber}>Wrong number? Edit</Text>
      </TouchableOpacity>
      <OTPInputView
        style={styles.otpInput}
        pinCount={4}
        placeholderCharacter="-"
        code={otpCode} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={onOtpChanged}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        // onCodeFilled={code => {
        //   console.log(`Code is ${code}, you are good to go!`);
        // }}
      />
      <Button
        title="Verify & continue"
        style={styles.verifyButton}
        styleText={styles.verifyButtonTitle}
        onPressButton={onVerify}
      />
      <Text style={styles.noOtp}>
        Didn't get the OTP?{' '}
        <Text style={styles.resend} onPress={onResend}>
          Resend
        </Text>
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
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
});

export default SignupStage2;
