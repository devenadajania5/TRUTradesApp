import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';
//import source from '../Asserts/Pdf/pdfCarPanter1.pdf';

function Screen({navigation, route}) {
  const {source} = route.params;
  return (
    <View style={styles.maintContainer}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  maintContainer: {width: '100%', height: '100%'},
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Screen;
