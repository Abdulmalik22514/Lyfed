import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Agreement} from '../../../common/agreement';
import {Button} from '../../../common/buttons';
import {Header} from '../../../common/header';
import {Input} from '../../../common/input';
import {TextHeader} from '../../../common/text';
import {hp, wp} from '../../../common/utils';
import * as Colors from '../../../common/colors';
import RNPickerSelect from 'react-native-picker-select';
import {GENDER} from '../constant';

type StageFourProp = {
  onPressCreate: () => void;
};

export const SignupStage4 = ({onPressCreate}: StageFourProp) => {
  const [gender, setGender] = useState(GENDER);
  const placeholder = {
    label: 'Select gender..',
    value: null,
    color: Colors.Ash,
  };

  return (
    <>
      <Header
        style={styles.detailsHeader}
        heading="A few more details."
        description="Please fill in the following boxes to complete your registration to get started."
      />
      <TextHeader label="Gender" />

      <RNPickerSelect
        placeholder={placeholder}
        onValueChange={value => {
          setGender(value);
          console.log(value);
        }}
        value={gender}
        items={GENDER}
        style={{
          viewContainer: {
            paddingHorizontal: wp(10),
            width: '100%',
            height: hp(55),
            borderWidth: 0.7,
            borderColor: Colors.Ash,
            borderRadius: 10,
            marginTop: hp(7),
          },
          placeholder: {
            fontSize: 30,
          },
        }}
      />
      <Input label="Email address" placeholder="Your email address" />
      <Input label="Phone number" isPhone />
      <Button
        title="Create new account"
        style={styles.accountButton}
        styleText={styles.textStyle}
        onPressButton={onPressCreate}
      />
      <Agreement />
    </>
  );
};

const styles = StyleSheet.create({
  detailsHeader: {
    marginBottom: hp(20),
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
});
