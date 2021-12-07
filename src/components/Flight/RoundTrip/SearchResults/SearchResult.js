import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import FlightCard from './FlightCard';
import {useNavigation} from '@react-navigation/native';

function SearchResult() {
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
      onPressSelect={() => navigation.navigate('ReviewItinerary')}
    />
  );
  return (
    <View>
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

export default SearchResult;