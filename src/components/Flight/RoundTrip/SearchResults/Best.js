import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import commonStyle from '../../../../layout/Style';
import FlightCard from './FlightCard';
import {useNavigation} from '@react-navigation/native';

function Best() {
  const [flights] = useState([
    {
      id: 'flight-list-id-one',
    },
    {
      id: 'flight-list-id-two',
    },
    {
      id: 'flight-list-id-three',
    },
    {
      id: 'flight-list-id-four',
    },
    {
      id: 'flight-list-id-five',
    },
  ]);
  const navigation = useNavigation();
  const [SelectedIndex, setSelectedIndex] = useState(false);
  const _renderItem = ({_, index}) => (
    <FlightCard
      onPress={() => setSelectedIndex(index)}
      isSelected={SelectedIndex === index}
      onPressSelect={() => navigation.navigate('OneWayReviewItinerary')}
    />
  );
  return (
    <View style={commonStyle.flex(1)}>
      <View>
        <FlatList
          keyExtractor={item => item?.id?.toString()}
          data={flights}
          renderItem={_renderItem}
        />
      </View>
    </View>
  );
}

export default Best;