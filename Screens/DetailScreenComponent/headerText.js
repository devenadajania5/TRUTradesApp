import React from 'react';
import {View, Text} from 'react-native';

function screen(props) {
  return (
    <View
      style={[
        {
          marginVertical: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: 'white',
          height: 50,
          width: '65%',
          alignSelf: 'center',
          alignItems: 'center',
          borderRadius: 70,
          justifyContent: 'center',
        },
        props.style,
      ]}>
      <Text style={{marginLeft: 10, fontWeight: 'bold', textAlign: 'center'}}>
        {props.name}
      </Text>
    </View>
  );
}

export default screen;
