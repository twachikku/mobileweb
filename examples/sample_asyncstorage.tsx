import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function load( setId:any, setFname:any, setLname:any ){
  const id    = await AsyncStorage.getItem('id');
  const fname = await AsyncStorage.getItem('fname');
  const lname = await AsyncStorage.getItem('lname');
  if(id !== null) { 
    setId(id); 
  }
  if(fname !== null) { 
    setFname(fname); 
  }
  if(lname !== null) { 
    setLname(lname); 
  }
}

export default function TabTwoScreen() {
  const [id   , setId]    = React.useState('');
  const [fname, setFname] = React.useState('');
  const [lname, setLname] = React.useState('');

  if(id==''){
    load(setId,setFname,setLname);
  }

  return (
    <View style={styles.container}>      
     <TextInput mode="outlined"
      label="รหัสนักศึกษา"
      value={id}
      onChangeText={text => setId(text)}
      style={styles.text}
     />
     <TextInput 
      label="ชื่อ"  mode="outlined"
      value={fname}
      onChangeText={text => setFname(text)}
      style={styles.text}
     />
     <TextInput
      label="นามสกุล"  mode="outlined"
      value={lname}
      onChangeText={text => setLname(text)}
      style={styles.text}
     />
      <Button 
        icon="content-save" 
        mode="contained" 
        onPress={() => {
          AsyncStorage.setItem('id', id);
          AsyncStorage.setItem('fname', fname);
          AsyncStorage.setItem('lname', lname);
        }
        }> บันทึก </Button>    
     
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  text :{
    marginTop: 10,
    //flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

