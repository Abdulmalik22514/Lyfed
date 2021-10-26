import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import * as Colors from '../../common/colors';
import AppIntroSlider from 'react-native-app-intro-slider';
import * as Images from '../../../assets/images';
import {Button} from '../../common/buttons';
import {OnboardingStyles as styles} from './style';
import Modal from 'react-native-modal';
import BottomSheet from '@gorhom/bottom-sheet';
import {CountryDetails, CountriesType, CountryProps} from './CountryTypes';
import {CountryBox} from './components/CountryInput';
import {SocialSignupCard, SocialSignupList} from './components/SignupButtons';
import {CountriesCard} from './components/CountriesCard';
import {Header} from '../../common/header';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Agreement} from '../../common/agreement';
import {hp} from '../../common/utils';
import {DropDown, UploadPicture} from '../../../assets/Svg';
import {Input} from '../../common/input';
import {DateContainer} from '../../common/dateBox';
import {TextHeader} from '../../common/text';
import {useCountries} from '../../hooks/useCountries';

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
          onClose={() => {
            setCountry(CountryDetails[0]);
            setPhoneNumber('');
          }}
          enablePanDownToClose
          ref={bottomSheetRef}
          snapPoints={signupStage === 1 ? ['70%'] : ['80%']}>
          {signupStage === 1 && (
            <>
              <Header
                heading="Enter your phone number"
                description="We will send you a 4-digit OTP to your phone number for verification"
              />
              <CountryBox
                onPress={() => setModalVisible(true)}
                short_name={country.short_name}
                code={country.code}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                onSubmitEditing={handlePhoneLength}
              />
              <Button
                title="send OTP"
                style={styles.button}
                styleText={styles.sendOTPButton}
                onPressButton={handlePhoneLength}
              />
              <Text style={styles.orText}>Or</Text>
              <View style={styles.signupOptions}>
                {SocialSignupList.map((item, index) => {
                  return (
                    <SocialSignupCard
                      key={index}
                      icon={item.icon}
                      onPress={() => setSignupStage(3)}
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
                style={styles.verifyButton}
                styleText={styles.verifyButtonTitle}
                onPressButton={() => setSignupStage(3)}
              />
              <Text style={styles.noOtp}>
                Didn't get the OTP?{' '}
                <Text style={styles.resend} onPress={() => setSignupStage(2)}>
                  Resend
                </Text>
              </Text>

              <Agreement />
            </>
          )}
          {signupStage === 3 && (
            <>
              <Header
                heading="SignUp."
                description="At Lyfed, we give information about Best Deals, Events, curated offers, sales & assured cashback for our customers."
              />
              <View style={{marginTop: hp(20)}}>
                <Text style={styles.profilePicture}>
                  Profile picture{' '}
                  <Text style={styles.optionalText}>(optional)</Text>
                </Text>

                <TouchableOpacity
                  onPress={() => setSignupStage(2)}
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
                  onPressButton={() => setSignupStage(4)}
                />
              </View>
              <Agreement />
            </>
          )}
          {signupStage === 4 && (
            <>
              <Header
                style={styles.detailsHeader}
                heading="A few more details."
                description="Please fill in the following boxes to complete your registration to get started."
              />
              <TextHeader label="Gender" />
              <View style={styles.genderSelection}>
                <Text style={styles.gender}>Select gender</Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <DropDown />
                </TouchableOpacity>
              </View>
              <Input label="Email address" placeholder="Your email address" />
              <Input label="Phone number" isPhone />
              <Button
                title="Create new account"
                style={styles.accountButton}
                styleText={styles.textStyle}
                onPressButton={() => setSignupStage(3)}
              />
              <Agreement />
            </>
          )}
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
