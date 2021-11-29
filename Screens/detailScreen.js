import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import arr from './array';
import {Card} from 'react-native-shadow-cards';
import Heading from './DetailScreenComponent/headerText';
import DetailText from './DetailScreenComponent/detailText';
import Point from './DetailScreenComponent/pointText';
import TimeTable from './DetailScreenComponent/timeTable';
import {useNavigation} from '@react-navigation/native';
import pdf1 from '../Asserts/Pdf/pdfCarPanter1.pdf';
import pdf2 from '../Asserts/Pdf/pdfCarPanter2.pdf';
import pdf3 from '../Asserts/Pdf/pdfCarPanter3.pdf';
import pdf4 from '../Asserts/Pdf/pdfCarPanter4.pdf';

export default function screen(props) {
  const navigate = useNavigation();
  const name = props.route.params.name;
  const img = props.route.params.image;
  const data = arr.get(name);
  const [pdfDataArr, setPdfDataArr] = useState([
    {name: 'PDF Resource 1', source: pdf1},
    {name: 'PDF Resource 2', source: pdf2},
    {name: 'PDF Resource 3', source: pdf3},
    {name: 'PDF Resource 4', source: pdf4},
  ]);
  console.log(data);
  useEffect(() => {
    navigate.setOptions({title: props.route.params.name});
  });
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{height: 300, width: '100%'}}>
        <View style={Styles.backgroundBoxContainer}></View>
        <Card style={Styles.cardContainer}>
          <Image source={img} style={Styles.imageContainer}></Image>
          <Text style={Styles.textContainer}>{data.name}</Text>
          <Text style={Styles.textContainer}>Total Time:195</Text>
        </Card>
      </View>
      <Heading name="Learning Outcome" style={{marginTop: -25}}></Heading>
      <Point name={data.learningOutcome}></Point>
      <Heading name={'Project Detail'}></Heading>
      <DetailText name={data.projectDescription}></DetailText>
      <Heading name={'ITA Resources'}></Heading>
      <Point name={data.itaResource}></Point>
      <Heading name={'PPE Required'}></Heading>
      <Point name={data.ppeRequirement}></Point>
      <Heading name={'Equipment Needed'}></Heading>
      <Point name={data.equipmentNeeded}></Point>
      <Heading name={'Material Needed'}></Heading>
      <DetailText name={data.materialNeeded}></DetailText>
      <Heading
        name={'Daily Plan & Lesson Topics Time Learning Supports'}></Heading>
      <View style={{flexDirection: 'row'}}>
        <TimeTable
          name={data.dailyPlan}
          style={{width: '40%'}}
          style1={{height: 85, fontSize: 18}}></TimeTable>
        <View style={{width: '2.5%'}}></View>
        <TimeTable
          name={data.time}
          style={{width: '15%'}}
          style1={{height: 85, fontSize: 18}}></TimeTable>
        <View style={{width: '2.5%'}}></View>
        <TimeTable
          name={data.learningSupports}
          style={{width: '40%'}}
          style1={{height: 85, fontSize: 18}}></TimeTable>
      </View>
      <Heading name={'PDF Resources'}></Heading>
      {pdfDataArr.map(item => {
        return (
          <TouchableOpacity
            key={item.name}
            activeOpacity={0.8}
            style={Styles.listStyle}
            onPress={() => navigate.navigate('PDF', {source: item.source})}>
            <Text style={Styles.textStyle}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  backgroundBoxContainer: {
    height: '40%',
    width: '100%',
    backgroundColor: '#003e51',
  },
  cardContainer: {
    width: '80%',
    height: '60%',
    alignSelf: 'center',

    marginTop: -50,
  },
  imageContainer: {
    aspectRatio: 1,
    height: 100,
    alignSelf: 'center',
    marginTop: 0,
  },
  textContainer: {
    fontSize: 20,
    marginTop: 10,
    color: '#FF3480',
    textAlign: 'center',
  },
  listStyle: {
    height: 50,
    backgroundColor: 'white',
    marginVertical: 1,
    justifyContent: 'center',
    width: '100%',
  },
  textStyle: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
