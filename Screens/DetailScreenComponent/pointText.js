import React from 'react';
import {View, Text} from 'react-native';

function screen(props) {
  return (
    <View
      style={[
        {
          width: '100%',
        },
        props.style,
      ]}>
      {props.name.map((item,index) => {
        return (
          <View
            style={{
              marginTop: 2,
              backgroundColor: (index === 4 && item.length<=5) ? '#44b9da' : 'white',
            }}>
            <Text style={[{padding: 10, fontSize: 18}, props.style1]}>
              {item}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export default screen;
