import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../layout/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Icon} from 'react-native-elements';
import SearchHistorySlider from '../../components/Flight/SearchHistorySlider';
import {useNavigation} from '@react-navigation/native';
import DateRangePicker from '../../components/Hotel/Home/DateRangePicker';
import TravellerAndClass from '../../components/Flight/TravellerAndClass';
import RoundTripCard from '../../components/Flight/SearchFlights/RoundTripCard';
import OneWayTripCard from '../../components/Flight/SearchFlights/OneWayTrip';
import MultiCityCard from '../../components/Flight/SearchFlights/MultiCity';
import Font from '../../layout/Font';
import commonStyle from '../../layout/Style';
import Back from '../../assets/icons/svg/Back.svg';

export default function Home() {
  const navigation = useNavigation();
  const [guestEntryModal, setGuestEntryModal] = useState(false);
  const [flightType, setFlightType] = useState('round-trip');
  const [isDateRangeVisible, setIsDateRangeVisible] = useState(false);
  const [Location, setLocation] = useState([
    {
      to: 'Dubai',
      toText: 'DXB',
      from: 'DOH',
      fromText: 'Doha',
      canDelete: false,
    },
    {
      to: 'Dubai',
      toText: 'LHR',
      from: 'DXB',
      fromText: 'Doha',
      canDelete: false,
    },
  ]);

  function _handleDelete() {
    let temp = [...Location];
    temp.pop();
    setLocation(temp);
  }
  function _handleAddFlight() {
    let temp = [...Location];
    temp.push({
      to: 'Dubai',
      toText: 'DOH',
      from: Location[Location.length - 1].to,
      fromText: Location[Location.length - 1].toText,
    });

    setLocation(temp);
  }
  function _handleSearchFlight() {
    if (flightType === 'round-trip') {
      navigation.navigate('FlightResult');
    } else if (flightType === 'one-way') {
      navigation.navigate('OneWay');
    } else {
      navigation.navigate('MultiCity');
    }
  }
  function _onSwap(index = 0) {
    let temp = [...Location];
    let ele = temp[index].from;
    temp[index].from = temp[index].to;
    temp[index].to = ele;
    ele = temp[index].fromText;
    temp[index].fromText = temp[index].toText;
    temp[index].toText = ele;
    setLocation(temp);
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backgroundColor={'#1C8CCC'} />
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <View
              style={{
                height: hp(
                  `${
                    flightType === 'multi-city' && Location.length > 2
                      ? Location.length * 16.7 + 48.5
                      : 74
                  }%`,
                ),
              }}>
              <LinearGradient
                colors={['#1C8CCC', '#015F95']}
                style={styles.canvas(Location.length)}>
                <View style={[styles.titleSection, styles.rowCenter]}>
                  <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Back />
                    </TouchableOpacity>
                  </View>
                  <View style={commonStyle.marginHorizontal(10)}>
                    <Text style={styles.title}>Search flights</Text>
                  </View>
                </View>

                <View
                  style={{
                    top: hp(
                      `${Location.length > 2 ? Location.length * 4.2 : 9}%`,
                    ),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={styles.topBar}>
                    <Pressable
                      onPress={() => setFlightType('round-trip')}
                      style={styles.topBarElements(flightType, 'round-trip')}>
                      <Text style={styles.topBarText(flightType, 'round-trip')}>
                        Round Trip
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => setFlightType('one-way')}
                      style={styles.topBarElements(flightType, 'one-way')}>
                      <Text style={styles.topBarText(flightType, 'one-way')}>
                        One Way
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => setFlightType('multi-city')}
                      style={styles.topBarElements(flightType, 'multi-city')}>
                      <Text style={styles.topBarText(flightType, 'multi-city')}>
                        Multi-City
                      </Text>
                    </Pressable>
                  </View>
                  {flightType === 'round-trip' ? (
                    <RoundTripCard
                      setIsLocationSelectorVisible={() =>
                        navigation.navigate('Search')
                      }
                      setIsDateRangeVisible={setIsDateRangeVisible}
                      setGuestEntryModal={setGuestEntryModal}
                      Location={Location[0]}
                      onSwap={_onSwap}
                    />
                  ) : flightType === 'multi-city' ? (
                    <MultiCityCard
                      setIsLocationSelectorVisible={() =>
                        navigation.navigate('Search')
                      }
                      setIsDateRangeVisible={setIsDateRangeVisible}
                      setGuestEntryModal={setGuestEntryModal}
                      Location={Location}
                      onSwap={_onSwap}
                      handleAddFlight={_handleAddFlight}
                      handleDelete={_handleDelete}
                    />
                  ) : (
                    <OneWayTripCard
                      setIsLocationSelectorVisible={() =>
                        navigation.navigate('Search')
                      }
                      setIsDateRangeVisible={setIsDateRangeVisible}
                      setGuestEntryModal={setGuestEntryModal}
                      Location={Location[0]}
                      onSwap={_onSwap}
                      handleAddReturn={() => setFlightType('round-trip')}
                    />
                  )}
                </View>
              </LinearGradient>
            </View>
            <View style={commonStyle.center}>
              <Pressable
                onPress={_handleSearchFlight}
                style={styles.searchButton}>
                <Icon
                  name={'search'}
                  type={'font-awesome'}
                  size={16}
                  color={Colors.white}
                />
                <Text
                  style={[
                    styles.searchButtonText,
                    commonStyle.marginHorizontal(5),
                  ]}>
                  Search flights
                </Text>
              </Pressable>
            </View>
            <View style={commonStyle.paddingHorizontal(10)}>
              <View style={commonStyle.marginVertical(15)}>
                <Text style={styles.recentSearchTitle}>Recently Searched</Text>
              </View>
              <View>
                <SearchHistorySlider />
              </View>
            </View>
            <View>
              <TravellerAndClass
                isTravellerandClassVisible={guestEntryModal}
                setIsTravellerandClassVisible={setGuestEntryModal}
              />
              <DateRangePicker
                isDateRangeVisible={isDateRangeVisible}
                setIsDateRangeVisible={setIsDateRangeVisible}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  margin: {
    marginVertical: 5,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  canvas(lo) {
    return {
      width: '100%',
      height: hp(`${lo > 2 ? lo / 2 + 21.5 : 21}%`),
    };
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: Font.AvenirMedium,
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: wp('90%'),
    height: hp('50%'),
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: 0.1,
    borderColor: Colors.border,
    elevation: 5,
    padding: 15,
  },
  subSection: {
    justifyContent: 'center',
  },
  divider: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 8,
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    flex: 1,
  },

  cardTitle: {
    fontSize: 14,
    color: Colors.lightText,
  },
  topBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: wp('90%'),
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: 0.1,
    borderColor: Colors.border,
    elevation: 5,
    paddingVertical: 5,
    marginBottom: 15,
    paddingHorizontal: 2,
  },
  topBarElements(type, name) {
    return {
      backgroundColor: type === name ? '#1C8CCC' : 'white',
      flex: 1,
      borderRadius: 8,
      marginHorizontal: 3,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  topBarText(type, name) {
    return {
      fontSize: 14,
      fontFamily: Font.AvenirMedium,
      color: type === name ? 'white' : Colors.lightText,
    };
  },
  searchButton: {
    width: 335,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  searchButtonText: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: Font.AvenirRegular,
  },
  searchHistoryCard: {
    width: 218,
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#163D68',
  },
  recentSearchTitle: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
    fontFamily: Font.AvenirRegular,
  },
  searchText: {
    fontSize: 24,
    color: Colors.black,
    fontWeight: 'bold',
  },
  searchHelperText: {
    fontSize: 14,
    color: Colors.lightText,
  },
  helperText: {
    fontSize: 14,
    color: Colors.lightText,
  },
  dateFilterText: {
    fontSize: 18,
    color: Colors.lightText,
    fontWeight: 'bold',
  },
  roomFilterText: {
    fontSize: 18,
    color: Colors.black,
  },
});
