import React, {useRef, useState} from 'react';
import {Text, View, Image, Alert, FlatList} from 'react-native';
import * as Colors from '../../common/colors';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Button} from '../../common/buttons';
import {OnboardingStyles as styles} from './style';
import Modal from 'react-native-modal';
import BottomSheet from '@gorhom/bottom-sheet';
import {CountriesType, CountryProps, ItemProps} from './types';
import {CountriesCard} from './components/CountriesCard';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Agreement} from '../../common/agreement';
import {useCountries} from '../../hooks/useCountries';
import SignupStage1 from './SignupStage1';
import {CountryDetails, SLIDES} from './constant';
import SignupStage2 from './SignupStage2';
import SignupStage3 from './SignupStage3';
import {SignupStage4} from './SignupStage4';
import {hp, wp} from '../../common/utils';

export default function Onboarding() {
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState('');
  const [country, setCountry] = useState<CountriesType>(CountryDetails[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [signupStage, setSignupStage] = useState(1);

  const {loading, countries} = useCountries();

  const [nextSlide, setNext] = useState(1);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const intro = useRef<AppIntroSlider>(null);
  const checkOTP = useRef<OTPInputView>(null);

  const handleConfirmOTP = () => {
    if (code === '1234') {
      setSignupStage(3);
    } else {
      Alert.alert('', 'Wrong code');
    }
  };

  const handlePhoneLength = () => {
    if (phoneNumber.length === 10) {
      setSignupStage(2);
    } else {
      Alert.alert('Error', 'Phone number incorrect');
    }
  };

  const FetchedCountries = ({item}: {item: CountryProps}) => {
    return <CountriesCard onPress={() => selectCountry(item)} {...item} />;
  };

  const _renderItem = ({item: {image}}: {item: ItemProps}) => {
    return (
      <View>
        <Image source={image} style={styles.slide} />
        <Text style={styles.neverMiss}>Never miss a sale</Text>
        <Text style={styles.description}>
          Any upcoming sale at your nearby mall and by your favourite brands.
          You will be the first to get the information
        </Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <Button
        title="Get started"
        onPressButton={() => {
          bottomSheetRef.current?.snapToIndex(0);
        }}
      />
    );
  };

  const _renderNextButton = () => {
    return (
      <Button
        title="Next"
        isNext
        onPressButton={() => intro.current?.goToSlide(nextSlide, true)}
      />
    );
  };

  const selectCountry = (item: CountriesType) => {
    setCountry(item);
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.logo}>Lfyd</Text>
        <AppIntroSlider
          style={{zIndex: -100}}
          ref={intro}
          onSlideChange={curent => {
            setNext(curent + 1);
          }}
          keyExtractor={item => item.key.toString()}
          data={SLIDES}
          renderItem={_renderItem}
          dotStyle={{backgroundColor: Colors.Border}}
          activeDotStyle={styles.activeDotStyle}
          renderDoneButton={_renderDoneButton}
          bottomButton={true}
          renderNextButton={_renderNextButton}
        />
        <BottomSheet
          style={styles.bottomSheetStyles}
          index={-1}
          onClose={() => {
            setCountry(CountryDetails[0]);
            setPhoneNumber('');
          }}
          enablePanDownToClose
          ref={bottomSheetRef}
          snapPoints={signupStage === 1 ? ['70%'] : ['80%']}>
          {signupStage === 1 && (
            <SignupStage1
              onChangeText={setPhoneNumber}
              onSendOtp={handlePhoneLength}
              country={country}
              phoneNumber={phoneNumber}
              onCountryPress={() => setModalVisible(true)}
            />
          )}
          {signupStage === 2 && (
            <SignupStage2
              onWrongNumber={() => setSignupStage(1)}
              phoneNumber={phoneNumber}
              otpCode={code}
              onOtpChanged={() => setCode(code)}
              onVerify={() => setSignupStage(3)}
              onResend={() => setSignupStage(2)}
            />
          )}
          {signupStage === 3 && (
            <SignupStage3
              onBack={() => setSignupStage(2)}
              onNext={() => setSignupStage(4)}
            />
          )}
          {signupStage === 4 && (
            <SignupStage4 onPressCreate={() => setSignupStage(3)} />
          )}
          <Agreement />
        </BottomSheet>
        <Modal isVisible={modalVisible} hasBackdrop backdropOpacity={0.7}>
          <View>
            <FlatList
              style={styles.modalView}
              data={countries}
              renderItem={FetchedCountries}
            />
          </View>
        </Modal>
      </View>
    </>
  );
}
