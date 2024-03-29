import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import commonStyle from '../../../layout/Style';
import {Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';

function ListCheckBox({text, svg = null}) {
  const [check, setCheck] = useState(false);
  return (
    <View
      style={[
        commonStyle.rowSpaceBetween,
        commonStyle.marginHorizontal(15),
        commonStyle.marginVertical(5),
      ]}>
      <View style={commonStyle.rowFlexStart}>
        {svg && svg}
        <Text style={styles.text}>{text}</Text>
      </View>
      <Icon
        onPress={() => setCheck(!check)}
        name={check ? 'checkbox-marked' : 'checkbox-blank-outline'}
        type={'material-community'}
        size={22}
        color={Colors.primary}
      />
    </View>
  );
}

export default ListCheckBox;
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirBook,
  },
});
