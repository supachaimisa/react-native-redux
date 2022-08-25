/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import axios from 'axios'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [form, setForm] = React.useState({});
  const [phoneList, setPhoneList] = React.useState([]);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const getPhone = async () => {
   const r = await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data)
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    console.log(r);
    setPhoneList(r)
  }
  const createPhone = async () => {
   const r = await axios.get('http://192.168.1.101:3000/phone')
    .then((res) => res.data)
    .catch( (error) => {
      // handle error
      console.log(error);
    })
    console.log(r);
    // setPhoneList(r)
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.nevber}>
        <Text style={styles.textNev}>Phone List App</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(v) => setForm({...form, Brand: v})}
        value={form.Brand}
        placeholder="Brand"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={(v) => setForm({...form, Model: form.v})}
        value={form.Model}
        placeholder="Model"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={(v) => setForm({...form, Year: form.v})}
        value={form.Year}
        placeholder="Year"
        keyboardType="text"
      />
        <View style={styles.button}>
          <Button
            title="Auto Enter data"
            onPress={createPhone}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Add phone"
            onPress={getPhone}
          />
        </View>
        <View style={{ 
          backgroundColor: '#000000',
          paddingTop: 20
           }}>
          <Text style={{ 
            color: "#FFFFFF",
            fontSize: 28
             }}>Phone List </Text>
        </View>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {
          phoneList.map((item,idx) =>{
            return (
            <Section key={idx} title={item.title}>
              {item.body}
            </Section>
            )
          })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nevber:{
    backgroundColor: '#F48225',
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  textNev:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222426'
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
  },
  button: {
    marginHorizontal: 50,
    marginVertical: 8,
  }
});

export default App;
