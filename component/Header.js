
import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('screen');

export const Header = (props) => {
    return (
        <View style={styles.viewHeader}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
           {/* LeftLebel */}
           <TouchableOpacity style={styles.viewlableleft} onPress={props.onPressLeft}>
             <Icon name={props.leftIcon} size={22}color={'#000'}style={{paddingRight: 15}}/>
             <Text style={styles.text}>{props.nameScreen}</Text>
            </TouchableOpacity>
             {/* arrowBtn */}
          <TouchableOpacity style={styles.lebleleft}>
            <Icon name={props.rightIcon} size={25} color={'#000'} />
          </TouchableOpacity>
        </View>

        </View>
    )
}
const styles = StyleSheet.create({
    lebleleft:{
        justifyContent: 'center', marginRight: 15
      },
      viewlableleft:{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
      },
      text:{
          fontSize:23,
          fontWeight:'700'
      },
      viewHeader:{
        width:'100%', height:"8%",backgroundColor:'#fff',justifyContent:'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 2.22,
        elevation: 10,borderBottomLeftRadius:25,borderBottomRightRadius:25
      }

    
})

