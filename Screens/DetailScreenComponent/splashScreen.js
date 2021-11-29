import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import im from '../../icons/mountain.png';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 3,
    };
  }

  componentWillMount() {
    //Start the method containing the timer
    this.startTimer();
  }

  startTimer() {
    let timeChange;
    //The key is to replace time in state with time for calculation and judgment, because time in state is constantly refreshed in render, but it will not be refreshed in the method
    let time = this.state.time;
    const clock = () => {
      if (time > 0) {
        //The update method is executed when time>0
        time = time - 1;
        this.setState({
          time: time,
        });
        console.log(time);
      } else {
        //When time=0, execute the end loop method
        clearInterval(timeChange);
        //When the countdown time = 0, enter the project, routing jump is used here
        // this.props.navigation.reset
        //this.props.navigation.navigate('Menu');
        this.props.navigation.reset({
          index: 0,
          routes: [{name: 'Menu'}],
        });
      }
    };
    //The clock method is executed every second
    timeChange = setInterval(clock, 1000);
  }

  render() {
    return (
      <View style={{backgroundColor: '#3d719d',flex:1}}>
        <Image style={styles.imageContainer} source={im}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchableComponent: {
    marginTop: 40,
    height: 200,
    borderRadius: 5,
    marginHorizontal: '3%',
  },
  imageContainer: {
    width: '100%',
    height: '55%',
    top:"20%",
    aspectRatio: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 40,
    marginTop: 20,
    color: '#FF3480',
    textAlign: 'center',
  },
});
