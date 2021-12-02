import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../../layout/Colors';
import {Icon} from 'react-native-elements';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';

export default function OneWayTrip({
  setIsLocationSelectorVisible,
  setIsDateRangeVisible,
  setGuestEntryModal,
  Location,
  onSwap,
  handleAddReturn,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.subSection}>
        <View style={commonStyle.rowCenter}>
          <View style={styles.underlineLeft}>
            <View style={styles.margin}>
              <Text style={styles.helperText}>From</Text>
            </View>
            <View style={styles.margin}>
              <Pressable onPress={() => setIsLocationSelectorVisible(true)}>
                <Text style={styles.searchText}>{Location.fromText}</Text>
              </Pressable>
            </View>
            <View style={commonStyle.marginBottom(10)}>
              <Text style={styles.helperText}>{Location.from}</Text>
            </View>
          </View>
          <Icon
            name={'swap'}
            type={'antdesign'}
            size={20}
            color={Colors.primary}
            onPress={() => onSwap()}
          />
          <View style={styles.underlineRight}>
            <View style={styles.margin}>
              <Text style={styles.helperText}>To</Text>
            </View>
            <View style={styles.margin}>
              <Pressable onPress={() => setIsLocationSelectorVisible(true)}>
                <Text style={styles.searchText}>{Location.toText}</Text>
              </Pressable>
            </View>
            <View style={commonStyle.marginBottom(10)}>
              <Text style={styles.helperText}>{Location.to}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.subSection}>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={styles.LeftUnderline}>
            <View style={styles.margin}>
              <Text style={styles.helperText}>Departure</Text>
            </View>
            <View style={styles.margin}>
              <Pressable onPress={() => setIsDateRangeVisible(true)}>
                <Text style={styles.dateFilterText}>Sun, 15 Sep</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.RightUnderline}>
            <View style={styles.margin}>
              <Text style={styles.helperText}>Add Return?</Text>
            </View>
            <View style={styles.margin}>
              <Pressable
                style={styles.addButton}
                onPress={() => handleAddReturn()}>
                <View style={commonStyle.padding(5)}>
                  <Icon
                    name={'plus'}
                    type={'antdesign'}
                    size={20}
                    color={Colors.primary}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.subSection}>
        <View style={styles.margin}>
          <Text style={styles.helperText}>Travellers & Class</Text>
        </View>
        <View style={styles.margin}>
          <Pressable onPress={() => setGuestEntryModal(true)}>
            <Text style={styles.roomFilterText}>1 Adult, Economy</Text>
          </Pressable>
        </View>
        <View style={styles.divider} />
      </View>
    </View>
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
  canvas: {
    width: '100%',
    height: hp('20%'),
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
  underlineRight: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    flex: 1,
    marginLeft: 15,
    alignItems: 'flex-end',
  },
  underlineLeft: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    flex: 1,
    marginRight: 15,
  },
  LeftUnderline: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    flex: 1,
    marginRight: 15,
    alignSelf: 'flex-end',
  },
  RightUnderline: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    flex: 1,
    marginLeft: 15,
    alignItems: 'flex-end',
  },
  cardTitle: {
    fontSize: 14,
    color: Colors.lightText,
  },
  searchText: {
    fontSize: 24,
    color: Colors.black,
    fontFamily: Font.AvenirBlack,
  },
  searchHelperText: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
  },
  helperText: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirMedium,
  },
  dateFilterText: {
    fontSize: 20,
    color: Colors.black,
    fontFamily: Font.AvenirHeavy,
    marginVertical: 5,
  },
  roomFilterText: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: Font.AvenirHeavy,
  },
  addButton: {
    backgroundColor: '#EAF1F9',
    borderRadius: 8,
    padding: 5,
  },
});
