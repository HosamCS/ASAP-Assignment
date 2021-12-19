import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import {useLinkProps} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('screen');

const Tab = createBottomTabNavigator();

// const Card = props => {

//   return(
//       <View style={{...styles.card, ...props.style,}}>
//          <Text>{props.children}</Text>
//       <TouchableOpacity style={{alignSelf:'center'}} onPress={handleRemoveItem}>
//        <Icon name='trash' size={35} color='red' />
//      </TouchableOpacity>
//      </View>
//   )
// };

function TabA({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getValueFunction} style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}> GET VALUE </Text>
      </TouchableOpacity>
      <ScrollView>
        {getitems.map(e => (
          <Card key={e.toString()}>
            <Text>{e}</Text>
          </Card>
        ))}
      </ScrollView>
      <Btn navigation={navigation}></Btn>
    </View>
  );
}

function Btn({props, navigation}) {
  return <></>;
}

function Picture({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <View style={{flexDirection: 'row', flex: 1,justifyContent: 'space-between',}}>
          <View style={styles.viewlableleft}>
            <Icon  name="home"size={25}color={'#191A19'}style={{paddingRight: 15}} />
            <Text style={styles.text}>Asset Inventory</Text>
          </View>
            <TouchableOpacity   style={styles.lebleleft} onPress={() => navigation.navigate('Model')}>
              <Icon name="arrow-right" size={20} color={'#4E9F3D'} />
            </TouchableOpacity>
          </View>
      </View>

      <View style={styles.btn}>
        <View
          style={{flexDirection: 'row',flex: 1,justifyContent: 'space-between',}}>
          <View style={styles.viewlableleft}>
            <Icon name="user"size={25} color={'#191A19'} style={{paddingRight: 15}}/>
            <Text style={styles.text}>Model</Text>
          </View>
            <TouchableOpacity  style={styles.lebleleft} onPress={() => navigation.navigate('Model')}>
              <Icon name="arrow-right" size={20} color={'#4E9F3D'} />
            </TouchableOpacity>
          </View>
      </View>


       <View style={styles.btn}>
        <View style={{flexDirection: 'row',flex: 1, justifyContent: 'space-between',}}>
           {/* LeftLebel */}
           <View style={styles.viewlableleft}>
             <Icon name="user" size={25}color={'#191A19'}style={{paddingRight: 15}}/>
             <Text style={styles.text}>Person</Text>
            </View>
             {/* arrowBtn */}
          <TouchableOpacity style={styles.lebleleft} onPress={() => navigation.navigate('Model')}>
            <Icon name="arrow-right" size={20} color={'#4E9F3D'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Picture;

const styles = StyleSheet.create({
    container:{
      flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#eee',
    },
  btn: {
    width: '85%',
    height: '6%',
    margin: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text:{
    fontSize: 20, fontWeight: '600', color: '#000'
  },
  lebleleft:{
    justifyContent: 'center', marginRight: 15
  },
  viewlableleft:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  }
});
