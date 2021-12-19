import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import { Header } from '../component/Header';
import Searchbar from '../component/Searchbar';

export const items = [
  {
    image: 'https://cutt.ly/ZY7wRW5',
    name: 'Camara',
    model: 'Nikon',
    model_name: 'Canon',
    cost: '100$',
    category: ['Camara'],
    reviews: 300,
  },
  {
    image: 'https://cutt.ly/eY7wGVz',

    name: 'PC',
    model: 'Dell',
    model_name: 'E6530',
    cost: '120$',
    category: ['Pc'],
    reviews: 500,
  },
  {
    image: 'https://cutt.ly/FY7eo5U',
    name: 'Audi',
    model: 'Gt400',
    model_name: 'GTR',
    cost: '300$',
    category: ['Cars'],
    reviews: 800,
  },
  {
    image: 'https://cutt.ly/SY7w6X5',
    name: 'Land Rover',
    model: 'Gt2000',
    model_name: 'Gt2125',
    cost: '250$',
    category: ['Pc'],
    reviews: 400,
  },
 
];

export default function Model({navigation}) {
  return (
    <>
    <Header leftIcon='arrow-circle-left' rightIcon='edit'  nameScreen='Model' onPressLeft={()=>navigation.goBack()} />
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{marginVertical:20}}>
          <Searchbar></Searchbar>
        </View>
       
        <ScrollView
          contentContainerStyle={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {items.length > 0 &&
            items.map(items => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate('ModelDetiles', {
                    model: items.model,
                    model_name: items.model_name,
                    name: items.name,
                    image: items.image,
                    cost: items.cost,
                    reviews: items.reviews,
                    category: items.category,
                  })
                }>
                <Card name={items.name} image={items.image} />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </>
  );
}
const Card = props => {
  return (
    <>
    <View
      style={styles.viewCardIamge}>
      <Image
        source={{uri: props.image,}}
        style={{width: 120, height: 120,}}
        resizeMode='contain'
      />
    </View>
     <View style={{alignItems: 'center',bottom:8}}>
     <Text style={{fontSize: 16, fontWeight: '600'}}>{props.name}</Text>
   </View>
   </>
  );
};

const styles = StyleSheet.create({
  viewCardIamge:{
    width:170,
    marginVertical: 15,
    marginHorizontal:10,
    justifyContent:'center',alignItems:'center',backgroundColor:'#fff',borderRadius:25,
    shadowColor: "#000", shadowOffset:{ width: 0, height: 3,},shadowOpacity: 0.25, shadowRadius:2.22, elevation: 5
  },


});
