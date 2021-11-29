import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  Button,
  StatusBar,
} from 'react-native';
import plumber from '../icons/plumber.jpg';
import automecanic from '../icons/automecanic.png';
import carpenter from '../icons/carpenter.png';
import electrition from '../icons/electrition.png';
import welder from '../icons/welder.jpg';
import NearBy from './component';
import metalTrader from '../icons/metalTrade.png';

const arr = [
  {name: 'Plumber', image: plumber, key: '0'},
  {name: 'Automotive', image: automecanic, key: '1'},
  {name: 'Woodwork', image: carpenter, key: '2'},
  {name: 'SolarPower', image: electrition, key: '3'},
  {name: 'MetalTrades', image: metalTrader, key: '4'},
  {name: 'Welder', image: welder, key: '5'},
];

export default function screen({navigation}) {
  const [columnNum, setColumnNum] = useState(2);
  const [columnWidth, setColumnWidth] = useState(2);
  Dimensions.addEventListener('change', () => {
    console.log('asad');
    asad();
  });
  function removeSide(num, width) {
    let total = 0;
    if (num <= 3) total = (5 / 100) * width;
    else total = (3 / 100) * width;
    total *= num * 2;
    console.log(total + ' is total');
    width -= total;
    return width / num;
  }
  useEffect(() => {
    let width = Dimensions.get('window').width;
    if (width < 480) {
      setColumnWidth(() => Math.floor(removeSide(2, width)));
      setColumnNum(() => 2);
    } else if (width < 786) {
      setColumnWidth(() => Math.floor(removeSide(3, width)));
      setColumnNum(() => 3);
    } else if (width <= 1080) {
      setColumnWidth(() => Math.floor(removeSide(4, width)));
      setColumnNum(() => 4);
    } else {
      setColumnWidth(() => Math.floor(removeSide(6, width)));
      setColumnNum(() => 6);
    }
    console.log(Math.floor(columnNum));
  });
  const asad = () => {
    let width = Dimensions.get('window').width;
    if (width < 480) {
      setColumnWidth(() => Math.floor(removeSide(2, width)));
      setColumnNum(() => 2);
    } else if (width < 786) {
      setColumnWidth(() => Math.floor(removeSide(3, width)));
      setColumnNum(() => 3);
    } else if (width <= 1080) {
      setColumnWidth(() => Math.floor(removeSide(4, width)));
      setColumnNum(() => 4);
    } else {
      setColumnWidth(() => Math.floor(removeSide(6, width)));
      setColumnNum(() => 6);
    }
    console.log(Math.floor(columnNum));
    console.log(columnWidth);
  };
  return (
    <View style={Styles.main}>
      <StatusBar backgroundColor="#003e51" />
      <View>
        <FlatList
          data={arr}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={items => (
            <NearBy
              image={items.item.image}
              name={items.item.name}
              style={{width: columnWidth}}
            />
          )}
          numColumns={columnNum}
          key={columnNum}
          keyExtractor={(item, index) => +item.key}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'space-between',
    alignItems: 'center',
  },
});
