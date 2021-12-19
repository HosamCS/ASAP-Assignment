import React from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Searchbar() {
  return (
    <View
      style={{
        width: '85%',
        backgroundColor: '#eee',
        borderRadius: 20,
        marginTop: 5,
        flexDirection: 'row',
        alignSelf:'center',shadowColor: "#000", shadowOffset: { width: 0, height: 2, },shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5
      }}>
      <TextInput
        keyboardType="default"
        placeholder="Search"
        maxLength={30}
        style={{
          marginLeft: 10,
          fontSize: 18,
          fontWeight: 'bold',
          fontStyle:'italic',
          flex: 1,
        }}></TextInput>

      <View //RightButton
        style={{
          width: 80,
          height:40,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf:'center',
          marginRight:8
        }}>
        <AntDesign name="barcode" size={30} />
      </View>
    </View>
  );
}
