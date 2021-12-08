import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../layout/Style';
import {Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Font from '../../layout/Font';
import StatusStepBar from '../../components/Flight/Checkout/StatusStepBar';
import LoginSvg from '../../components/Svg/Login.svg';
import UserAddSvg from '../../components/Svg/UserAdd.svg';
import PassengerAccordion from '../../components/Flight/Checkout/PassengerAccordion';
import AdultDetailForm from '../../components/Flight/Checkout/AdultDetailForm';

function Checkout({navigation}) {
  return (
    <SafeAreaView
      style={[commonStyle.container, commonStyle.backgroundColor('F5F7FB')]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <LinearGradient
              colors={['#1C8CCC', '#015F95']}
              style={styles.canvas}>
              <View
                style={[
                  commonStyle.rowFlexStart,
                  commonStyle.marginVertical(10),
                ]}>
                <View style={commonStyle.center}>
                  <Icon
                    name={'md-arrow-back-sharp'}
                    type={'ionicon'}
                    style={styles.icon}
                    color={Colors.white}
                  />
                </View>
                <View style={commonStyle.marginHorizontal(10)}>
                  <Text style={styles.title}>Checkout</Text>
                </View>
              </View>
              <View style={styles.horizontalStepBarSection}>
                <StatusStepBar activeIndex={2} />
              </View>
            </LinearGradient>
            <View style={styles.middleSection}>
              <View style={commonStyle.marginVertical(10)}>
                <View style={[commonStyle.rowSpaceBetween]}>
                  <View>
                    <Text style={styles.dataDefinition}>
                      Doha (DOH) → Dubai (DXB)
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.priceTitle}>Total Price</Text>
                  </View>
                </View>
                <View style={[commonStyle.rowSpaceBetween]}>
                  <View>
                    <Text style={styles.mutedText}>
                      Wed, 15 Sep, 4 Travellers
                    </Text>
                  </View>
                  <View style={commonStyle.rowSpaceBetween}>
                    <Text>QAR </Text>
                    <Text style={styles.priceTitle}>170.00</Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={styles.dataDefinition}>
                      Dubai (DXB) → Doha (DOH)
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.mutedText}>
                      Mon, 20 Sep, 4 Travellers
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.loginSectionWrapper}>
              <View style={styles.loginSection}>
                <View style={commonStyle.rowSpaceBetween}>
                  <View>
                    <LoginSvg />
                  </View>
                  <View style={commonStyle.marginHorizontal(8)}>
                    <Text style={styles.loginHelperText}>
                      Login to view your saved traveller list.
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Auth')}
                      style={styles.loginButton}>
                      <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.addPassengerHeaderSection}>
              <View style={commonStyle.rowFlexStart}>
                <View>
                  <UserAddSvg />
                </View>
                <View style={commonStyle.marginHorizontal(10)}>
                  <Text style={styles.addPassengerTitle}>
                    Add Passenger Details
                  </Text>
                </View>
              </View>
            </View>
            <View style={commonStyle.marginVertical(4)}>
              <PassengerAccordion
                title={'Adult 1'}
                Content={<AdultDetailForm />}
              />
            </View>
            <View style={commonStyle.marginVertical(4)}>
              <PassengerAccordion
                title={'Adult 2'}
                Content={<AdultDetailForm />}
              />
            </View>
            <View style={commonStyle.marginVertical(4)}>
              <PassengerAccordion
                title={'Child 1'}
                Content={<AdultDetailForm />}
              />
            </View>
            <View style={commonStyle.marginVertical(4)}>
              <PassengerAccordion
                title={'Infant 1'}
                Content={<AdultDetailForm />}
              />
            </View>
          </View>
          <View style={commonStyle.marginVertical(20)}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ReviewItinerary')}
              style={styles.checkOutBtn}>
              <Text style={styles.checkOutBtnText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: '100%',
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
  },
  section: {
    paddingHorizontal: 12,
  },
  icon: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  horizontalStepBarSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  middleSection: {
    paddingHorizontal: 12,
  },
  dataDefinition: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  priceTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#26698E',
  },
  mutedText: {
    fontFamily: Font.AvenirRoman,
    fontSize: 12,
    color: '#6C6C6C',
  },
  loginSectionWrapper: {
    ...commonStyle.marginVertical(10),
    paddingHorizontal: 12,
  },
  loginSection: {
    width: '100%',
    height: 45,
    backgroundColor: 'rgba(28, 140, 204, 0.16)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: 50,
    height: 25,
    borderWidth: 1,
    borderColor: '#1D8CCC',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: '#1D8CCC',
  },
  loginHelperText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  addPassengerHeaderSection: {
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  addPassengerTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
  },
  checkOutBtn: {
    width: wp('80%'),
    height: 56,
    borderRadius: 6,
    backgroundColor: '#F15922',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkOutBtnText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.white,
  },
});

export default Checkout;
