import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {UploadPicture} from '../../../../assets/Svg';
import {Agreement} from '../../../common/agreement';
import {Button} from '../../../common/buttons';
import {DateContainer} from '../../../common/dateBox';
import {Header} from '../../../common/header';
import {Input} from '../../../common/input';
import {TextHeader} from '../../../common/text';
import {hp, wp} from '../../../common/utils';
import * as Colors from '../../../common/colors';

type StageThreeProps = {
  onBack: () => void;
  onNext: () => void;
};

const SignupStage3 = ({onBack, onNext}: StageThreeProps) => {
  return (
    <>
      <Header
        heading="SignUp."
        description="At Lyfed, we give information about Best Deals, Events, curated offers, sales & assured cashback for our customers."
      />
      <View style={{marginTop: hp(20)}}>
        <Text style={styles.profilePicture}>
          Profile picture <Text style={styles.optionalText}>(optional)</Text>
        </Text>

        <TouchableOpacity
          onPress={onBack}
          style={styles.pictureContainer}
          activeOpacity={0.7}>
          <UploadPicture />
          <Text style={styles.pictureText}>Upload picture</Text>
        </TouchableOpacity>
        <Input label="Name" placeholder="Your name" />
        <View style={{marginTop: hp(15)}}>
          <TextHeader label="Date of birth" />
          <View style={styles.dateContainer}>
            <DateContainer label="DD" />
            <DateContainer label="MM" />
            <DateContainer label="YYYY" isYear />
          </View>
        </View>
        <Button
          title="Next"
          style={styles.signupButton}
          styleText={styles.nextStage3}
          onPressButton={onNext}
        />
      </View>
      <Agreement />
    </>
  );
};

const styles = StyleSheet.create({
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
  nextStage3: {
    color: Colors.Black,
  },
});

export default SignupStage3;
