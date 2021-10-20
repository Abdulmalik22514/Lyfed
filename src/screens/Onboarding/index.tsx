import React, {useRef, useState, useMemo} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInputProps,
  Alert,
} from 'react-native';
import * as Colors from '../../common/colors';
import AppIntroSlider from 'react-native-app-intro-slider';
import * as Images from '../../../assets/images';
import {Button} from '../../common/buttons';
import {OnboardingStyles as styles} from './style';
import Modal from 'react-native-modal';
import BottomSheet from '@gorhom/bottom-sheet';
import {Countries, CountriesType} from './CountryTypes';
import {CountryBox} from './components/CountryInput';
import {SocialSignupCard, SocialSignupList} from './components/SignupButtons';
import {CountriesCard} from './components/CountriesCard';
import {Header} from '../../common/header';
import OTPInputView, {
  OTPInputViewState,
} from '@twotalltotems/react-native-otp-input';
import {Agreement} from '../../common/agreement';
import {hp} from '../../common/utils';

type ItemProps = {
  key: number;
  image: any;
};

type RenderItemProps = ItemProps[];

const slides: RenderItemProps = [
  {
    key: 1,
    image: Images.Onboarding2,
  },
  {
    key: 2,
    image: Images.Onboarding2,
  },
  {
    key: 3,
    image: Images.Onboarding2,
  },
  {
    key: 4,
    image: Images.Onboarding2,
  },
];

export default function Onboarding() {
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState('');
  const [country, setCountry] = useState<CountriesType>(Countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [signupStage, setSignupStage] = useState(1);

  const [nextSlide, setNext] = useState(1);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const intro = useRef<AppIntroSlider>(null);
  const checkOTP = useRef<OTPInputView>(null);

  const handlePhoneLength = () => {
    if (phoneNumber.length === 10) {
      setSignupStage(2);
    } else {
      Alert.alert('Error', 'Phone number incorrect');
    }
  };

  const handleConfirmOTP = () => {
    if (code === '1234') {
      setSignupStage(3);
    } else {
      Alert.alert('', 'Wrong code');
    }
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
        onPress={() => {
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
        onPress={() => intro.current?.goToSlide(nextSlide, true)}
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
          data={slides}
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
          enablePanDownToClose
          ref={bottomSheetRef}
          snapPoints={signupStage === 1 ? ['70%'] : ['75%']}>
          {signupStage === 1 && (
            <>
              <Header
                heading="Enter your phone number"
                description="We will send you a 4-digit OTP to your phone number for verification"
              />
              <CountryBox
                onPress={() => {
                  setModalVisible(true);
                }}
                code={country.code}
                name={country.name}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                onSubmitEditing={handlePhoneLength}
              />
              <Button
                title="send OTP"
                style={styles.button}
                onPress={handlePhoneLength}
              />
              <Text style={styles.orText}>Or</Text>
              <View style={styles.signupOptions}>
                {SocialSignupList.map((item, index) => {
                  return (
                    <SocialSignupCard
                      key={index}
                      icon={item.icon}
                      onPress={() => setModalVisible(false)}
                    />
                  );
                })}
              </View>
              <Agreement />
            </>
          )}

          {signupStage === 2 && (
            <>
              <Header
                heading="Verify OTP"
                description={`Please enter the 4-digit OTP sent to you at +234-${phoneNumber}`}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setSignupStage(1);
                }}>
                <Text style={styles.editNumber}>Wrong number? Edit</Text>
              </TouchableOpacity>
              <OTPInputView
                style={styles.otpInput}
                pinCount={4}
                placeholderCharacter="-"
                code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged={() => {
                  setCode(code);
                }}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={code => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
              />
              <Button
                title="Verify & continue"
                style={styles.verifyOtp}
                onPress={() => setSignupStage(3)}
              />
              <Text style={styles.noOtp}>
                Didn't get the OTP? <Text style={styles.resend}>Resend</Text>
              </Text>
              <View style={{marginTop: hp(80)}}>
                <Agreement />
              </View>
            </>
          )}
          {signupStage === 3 && (
            <>
              <View>
                <Text onPress={() => setSignupStage(2)}>fdhglsfdgl</Text>
              </View>
            </>
          )}
        </BottomSheet>

        <Modal isVisible={modalVisible} hasBackdrop backdropOpacity={0.7}>
          <View>
            <View style={styles.modalView}>
              {Countries.map((item, index) => {
                return (
                  <CountriesCard
                    key={index}
                    code={item.code}
                    name={item.name}
                    onPress={() => selectCountry(item)}
                  />
                );
              })}
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
