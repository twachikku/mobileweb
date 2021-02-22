import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, TextInput } from 'react-native-paper';
import * as firebase from 'firebase';

function save(id:string, name:string){
  firebase.database().ref('city/'+id).set(name);
}
function load(setCities:any){
  firebase.database().ref('city').on('value', (snapshot:any) => {
    var list=[];
    var data = snapshot.val();
    var no=0;
    for(var id in data){
      var txt = data[id]; 
      var city={id:id, name:txt};
      list.push(city);
    }
    setCities(list);
    console.log(list);
 });
}

export default function TabOneScreen() {
  const [cities, setCities]    = React.useState([]);
  const [cid,   setId]    = React.useState("");
  const [cname, setName]    = React.useState("");

  const [inited, setInited]    = React.useState(false);
  if(!inited){
     load(setCities);
     setInited(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>รายชื่อเมือง</Text>
      <TextInput
      label="รหัส"  mode="outlined"
      value={cid}
      onChangeText={text => setId(text)}
     />
      <TextInput
      label="ชื่อเมือง"  mode="outlined"
      value={cname}
      onChangeText={text => setName(text)}
     />
      <Button 
        icon="content-save" 
        mode="contained" 
        onPress={() => { save(cid,cname); setId(""); setName("");  } }> Add </Button>    
      <FlatList
        data={cities}
        renderItem={({item}) =><Text style={styles.text}>
        {item.id} 
        {item.name} 
        </Text>
       }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10
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
