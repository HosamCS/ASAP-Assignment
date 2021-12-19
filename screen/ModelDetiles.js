import React, {useState} from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from '../component/Header';

const RSimage = props => (
  <View
    style={styles.imageback}>
    <Image
      source={{uri: props.image}}
      resizeMode="contain"
      style={{
        width: 150,
        height: 150,
        borderRadius: 25,
      }}
    />
  </View>
);

function Info(props) {
  const [show, setShow] = useState(false); //ShowMore ?
  return (
    <View style={{marginHorizontal: 18}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.texttitle}>Model</Text>
        <Text style={styles.textinfo}>{props.model}</Text>
      </View>
      <View style={styles.infoview}>
        <Text style={styles.texttitle}>Model Name</Text>
        <Text style={styles.textinfo}>{props.model_name}</Text>
      </View>
      <View style={styles.infoview}>
        <Text style={styles.texttitle}>Cost</Text>
        <Text style={styles.textinfo}>{props.cost}</Text>
      </View>
      <View style={styles.infoview}>
        <Text style={styles.texttitle}>Review</Text>
        <Text style={styles.textinfo}>{props.reviews}</Text>
      </View>
      <View style={styles.infoview}>
        <Text style={styles.texttitle}>Category</Text>
        <Text style={styles.textinfo}>{props.category}</Text>
      </View>
    </View>
  );
}


const Notes = () => {
  const [note, setNote] = useState([]);
  const [text ,onChangeText] =useState('');

  const isEmpty = () => !/[^\s]+/.test(text); //alart ('Pls Fill')
  const handelNote =()=>{
  if(!isEmpty()) {
      setNote([...note, text]);
    } 
   }
  return (
    <>
    <View style={{height: 120,}}>
      <View style={styles.title}>
        <Text style={styles.textinfo}>Notes</Text>
        <TouchableOpacity>
          <Icon name="arrow-up" size={20} color={'#dddd'} />
        </TouchableOpacity>
      </View>
      <View
        style={styles.viewinputShadow}>
        <TextInput
          keyboardType="default"
          placeholder="Add to Note ..."
          maxLength={50}
          onChangeText={onChangeText}
          style={styles.inputNote}/>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={handelNote}
          style={styles.Save}>
          <Icon name="save" size={18} color={'#2C272E'} />
          <Text style={{color: '#2C272E'}}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{flex: 1,}}>
      <Text style={styles.title}>History Note</Text>
    <ScrollView style={{}}>
    <View
      style={styles.historyCard}>
        {note.map((note)=>( 
            <View style={{width:'90%',margin:6}}>
              <Text style={styles.textinfo}>Hossam Hassan</Text>
              <Text style={{fontSize:12,fontStyle:'italic'}}>03.12.2021 15.00 PM</Text>
              <Text>{note}</Text>
              <Text style={{color:'#F0ECE3'}}>_____________________________________________________</Text>
              {/* i Know Divider in RNE  */}
            </View> 
           ))}  
      </View>
    </ScrollView>
  </View>
 </>
  );
};

const ModelDetiles = ({route,navigation}) => {
  const {model_name, model, image, cost, reviews, category} = route.params;
  return (
    <>
     <Header leftIcon='arrow-circle-left' rightIcon='edit'  nameScreen='Model' onPressLeft={()=>navigation.goBack()} />
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <RSimage image={image}></RSimage>
        </View>
        <View style={styles.title}>
          <Text style={styles.textinfo}>Image Info</Text>
          <TouchableOpacity>
            <Icon name="arrow-up" size={20} color={'#dddd'} />
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 10, width: '100%'}}>
          <Info
            model={model}
            model_name={model_name}
            cost={cost}
            reviews={reviews}
            category={category}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <Notes />
      </View>
    </>
  );
};
const styles = StyleSheet.create({

   imageback :{
    width: 250,
    height: 150,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.25,
    shadowRadius: 2.22,
    elevation: 5,
   } ,
  infoview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  textinfo: {fontSize: 18, fontWeight: 'bold'},
  texttitle: {fontSize: 18, fontWeight: '400'},
  title: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '90%',
    
  },
  historyCard:{
    backgroundColor: '#fff',
    width: '85%',
    borderColor: '#fff',
    borderWidth: 0.5,
    borderRadius:20,
    justifyContent: 'center',
    alignSelf:'center',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.22,
    shadowRadius: 2.10,
    elevation: 3,
  },
  inputNote:{
    marginLeft: 10,
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '600',
    flex: 1,
  },
  Save:{
    justifyContent:'center',
    height: 40,
    width: 80,
    marginRight:5,
    backgroundColor:'#eee',
    borderRadius:70,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'space-evenly',
  },
  viewinputShadow:{
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 30,
    bottom:25,
    flexDirection: 'row',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
export default ModelDetiles;
