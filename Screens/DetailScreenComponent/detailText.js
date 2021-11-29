import React from 'react';
import {View, Text} from 'react-native';

function screen(props) {
  return (
    <View
      style={[{
        width: '100%',
        justifyContent: 'center',
        backgroundColor:"white"
      },props.style]}>
      <Text style={{marginHorizontal:5,fontSize:18}}>{props.name}</Text>
    </View>
  );
}

export default screen;
