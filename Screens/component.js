import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';
import {Card} from 'react-native-shadow-cards';
import {useNavigation} from '@react-navigation/native';

function screen(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.touchableComponent, props.style]}
      onPress={() => {
        navigation.navigate('DetailScreen', {
          name: props.name,
          image: props.image,
        });
      }}>
      <Card style={[styles.cardContainer]}>
        <Image style={styles.imageContainer} source={props.image}></Image>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <Text style={styles.textStyle}>{props.name}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableComponent: {
    marginTop: 30,
    height: 200,
    borderRadius: 5,
    marginHorizontal: '3%',
    marginBottom:10
  },
  imageContainer: {
    width: '100%',
    top: 10,
    height: '60%',
    aspectRatio: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  cardContainer: {width: '100%', height: '100%'},
  textStyle: {
    fontSize: 20,
    marginTop: 10,
    color: '#FF3480',
    textAlign: 'center',
  },
});

export default screen;

//react-native link
