import React from 'react';
import {View, Text} from 'react-native';

function screen(props) {
  return (
    <View style={[{width:"40%"},props.style]}>
      {props.name.map((item, index) => {
        return (
          <View
            style={[{
              marginTop: 2,
              justifyContent:"center",
              backgroundColor:
                index === 4  ? '#44b9da' : 'white',
            },props.style1]}>
            <Text style={{fontSize:18,padding:5}}>
              {item}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export default screen;
