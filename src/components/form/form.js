import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, TextInput, Button, useColorScheme, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from '../../features/userreducer';
import {setDarkMode} from '../../features/darkmodereducer';
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

export default function form() {

    const darkModeReducer = useSelector(state => state.darkModeReducer.value);
    const dispatch = useDispatch();
    const [form, setForm] = useState({});
    const isDarkMode = useColorScheme() === 'dark' ? Colors.darker: Colors.lighter;
    useEffect(() => {
        dispatch(setDarkMode(isDarkMode))
        getUser()
    }, []);
    

  const getUser = async () => {
    const res = await axios
      .get('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.data)
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    dispatch(addUser(res));
    
  };
  const createUser = async () => {
    const res = await axios
      .post('https://jsonplaceholder.typicode.com/users', form)
      .then(res => res.data)
      .catch(error => {
        // handle error
        console.log(error);
      });
    if (res) {
      alert('create success');
      console.log('create success',res);
    }
  };
  
  return (
    <>
      <SafeAreaView style={{ backgroundColor: darkModeReducer }}>
        <View style={styles.nevber}>
          <Text style={styles.textNev}>User List App</Text>
        </View>
      </SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={v => setForm({...form, name: v})}
        value={form.name}
        placeholder="name"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={v => setForm({...form, email: v})}
        value={form.email}
        placeholder="email"
        keyboardType="text"
      />
      {/* <View style={styles.button}>
        <Button title="Get user" onPress={getUser} />
      </View> */}
      <View style={styles.button}>
        <Button title="Create user" onPress={createUser} />
      </View>
      <View
        style={{
          backgroundColor: '#04AA6D',
          paddingTop: 20,
          
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 22,
            border: 'solid white 1px'
          }}>
          Users List
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#04AA6D',
          paddingTop: 20,
          
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 14,
            border: 'solid white 1px'
          }}>
          Press hold for edit or delete the name and email
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    nevber: {
      backgroundColor: '#F48225',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textNev: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#222426',
    },
  
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: "black"
    },
    button: {
      marginHorizontal: 50,
      marginVertical: 8,
    },
  });
  
