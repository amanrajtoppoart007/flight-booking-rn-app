import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../../layout/Colors';
import {Icon} from 'react-native-elements';

import countries from '../../utils/country';
import SelectDropdown from 'react-native-select-dropdown';
import Font from '../../layout/Font';
import commonStyle from '../../layout/Style';

function CustomTextInput({
  type,
  title,
  value,
  setValue,
  phoneCode = '+974',
  setPhoneCode = null,
  placeholder,
}) {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [countryList] = useState(countries);
  const [countryCode, setCountryCode] = useState(phoneCode);

  return (
    <View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.inputContainerStyle}>
        {type === 'mobile' && (
          <SelectDropdown
            defaultButtonText={countryCode}
            buttonStyle={styles.dropDownButtonStyle}
            buttonTextStyle={styles.dropDownButtonTextStyle}
            renderDropdownIcon={() => {
              return (
                <Icon
                  type={'font-awesome'}
                  name="chevron-down"
                  color={'#163D68'}
                  size={14}
                />
              );
            }}
            renderCustomizedButtonChild={item => {
              return (
                <View style={commonStyle.rowSpaceBetween}>
                  <View>
                    <Image
                      style={styles.icon}
                      source={require('../../assets/icons/country/qar.png')}
                    />
                  </View>
                  <View style={commonStyle.marginHorizontal(4)}>
                    <Text style={styles.dropdownBtnTxtStyle}>
                      {item?.dial_code ?? '+974'}
                    </Text>
                  </View>
                </View>
              );
            }}
            dropdownIconPosition={'right'}
            data={countryList}
            onSelect={selectedItem => {
              setCountryCode(selectedItem?.dial_code);
              setPhoneCode(selectedItem?.dial_code);
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem?.dial_code;
            }}
            rowTextForSelection={item => {
              return item?.dial_code;
            }}
          />
        )}

        <TextInput
          value={value}
          placeholder={placeholder ?? ''}
          onChangeText={text => setValue(text)}
          style={[styles.inputStyle(type), styles.inputTextStyle]}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={'#6C6C6C'}
        />
        {type === 'password' && (
          <Icon
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            name={'eye'}
            type={'font-awesome'}
            color={'#444343'}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#AAAAAA',
  },
  icon: {width: 20, height: 20},
  inputStyle(type) {
    return {
      width: type === 'mobile' ? '65%' : '90%',
    };
  },
  inputTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
  },
  dropdownBtnTxtStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#163D68',
  },
  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  dropDownButtonStyle: {
    width: 100,
    height: 35,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#FFF',
  },
  dropDownButtonTextStyle: {
    fontSize: 18,
    color: Colors.lightText,
  },
});

export default CustomTextInput;
