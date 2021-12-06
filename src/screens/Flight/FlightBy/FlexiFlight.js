import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import commonStyle from '../../../layout/Style';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';
import CustomStatusBar from '../../../components/CustomStatusBar';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import Cheapest from '../../../components/Flight/RoundTrip/SearchResults/Cheapest';
import Fastest from '../../../components/Flight/RoundTrip/SearchResults/Fastest';
import Best from '../../../components/Flight/RoundTrip/SearchResults/Best';
import RoundTrip from '../../../components/Svg/RoundTripFlight.svg';
import FlightTicket from '../../../components/Svg/FlightTicket.svg';
import {TabView} from 'react-native-tab-view';
import SortFilter from '../../../components/Flight/FlightResults/SortFilter';

function FlexiFlight({navigation}) {
  const [shortVisible, setShortVisible] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'cheapest', title: 'Cheapest', price: 'QAR 170'},
    {key: 'fastest', title: 'Fastest', price: 'QAR 273'},
    {key: 'best', title: 'Best', price: 'QAR 170'},
  ]);

  const _handleIndexChange = i => setIndex(i);

  const _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const isActive = i === index;
          return (
            <TouchableOpacity
              key={i?.toString()}
              style={styles.tabItem(isActive)}
              onPress={() => setIndex(i)}>
              <Animated.Text style={styles.tabTitle}>
                {route.title}
              </Animated.Text>
              <View>
                <Text style={styles.price}>{route?.price}</Text>
              </View>
              {i === index ? (
                <View style={styles.underline} />
              ) : (
                <View style={styles.underlineTransparent} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'cheapest':
        return <Cheapest jumpTo={jumpTo} />;
      case 'fastest':
        return <Fastest jumpTo={jumpTo} />;
      case 'best':
        return <Best jumpTo={jumpTo} />;
      default:
        return <Cheapest jumpto={jumpTo} />;
    }
  };

  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <View style={[commonStyle.flex(1), commonStyle.wrapper]}>
        <View style={[commonStyle.flex(1), commonStyle.content]}>
          <LinearGradient colors={['#1C8CCC', '#015F95']} style={styles.canvas}>
            <View style={styles.header}>
              <View style={[styles.titleSection, styles.rowSpaceBetween]}>
                <View style={commonStyle.rowCenter}>
                  <View>
                    <Icon
                      onPress={() => navigation.goBack()}
                      name={'arrow-back'}
                      type={'material-icon'}
                      size={30}
                      color={Colors.white}
                    />
                  </View>
                  <View style={styles.titleWrapper}>
                    <View>
                      <Text style={styles.title}>Doha</Text>
                    </View>
                    <View style={commonStyle.marginHorizontal(8)}>
                      <RoundTrip />
                    </View>
                    <View>
                      <Text style={styles.title}>Dubai</Text>
                    </View>
                  </View>
                </View>
                <View style={commonStyle.rowCenter}>
                  <View style={commonStyle.marginHorizontal(5)}>
                    <Icon
                      name={'edit'}
                      type={'feather'}
                      size={18}
                      color={Colors.white}
                    />
                  </View>
                  <View style={commonStyle.marginHorizontal(5)}>
                    <Icon
                      onPress={() => setShortVisible(true)}
                      name={'filter-variant'}
                      type={'material-community'}
                      size={18}
                      color={Colors.white}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.subTitleSection}>
                <Text style={styles.subTitle}>
                  15 Sep - 20 Sep | 4 Travellers | Economy
                </Text>
              </View>
            </View>
          </LinearGradient>
          <View style={commonStyle.flex(1)}>
            <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              renderTabBar={_renderTabBar}
              onIndexChange={_handleIndexChange}
              initialLayout={{width: wp('100%')}}
            />
          </View>
        </View>
      </View>
      {shortVisible && <SortFilter onClose={() => setShortVisible(false)} />}
      <TouchableOpacity
        onPress={() => navigation.navigate('FlightResultsOnwards')}
        style={styles.FlexiButton}>
        <FlightTicket style={commonStyle.marginRight(5)} />
        <Text style={styles.whiteText}>Flexi Flight Option</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  price: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  canvas: {
    width: '100%',
    height: hp('14%'),
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBarContainer: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 74, 74, 0.2)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  subTitleSection: {marginVertical: 3, marginLeft: 32},
  subTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#90E0FF',
  },
  tabTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  tabBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    fontSize: 14,
    color: '#F15922',
    marginVertical: 5,
    fontFamily: Font.AvenirHeavy,
    marginHorizontal: 9,
  },

  underline: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#3F8815',
    marginTop: 10,
  },
  underlineTransparent: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#DDDDDD',
    marginTop: 10,
  },
  tabItem(isActive) {
    return {
      width: '33.33%',
      alignItems: 'center',
      borderLeftWidth: 0.5,
      borderRightWidth: 0.5,
      borderLeftColor: '#707070',
      borderRightColor: '#707070',
      backgroundColor: isActive ? '#CFD7E0' : Colors.white,
    };
  },
  whiteText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: 'white',
  },

  FlexiButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    padding: 10,
    backgroundColor: '#0B151F',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 6,
    alignItems: 'center',
  },
});

export default FlexiFlight;
