import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
  TextInput,
} from 'react-native';
import axios from 'axios';
const App = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({});
  useEffect(() => {
    setModalVisible(props.toggle);
  }, [props.toggle]);

  useEffect(() => {
    setForm({
      id: props.user.id,
      name: props.user.name,
      email: props.user.email,
    });
  }, [props.user.id]);

  const updateUser = async () => {
    const res = await axios
      .patch('https://jsonplaceholder.typicode.com/users/' + form.id, {
        ...form,
      })
      .then(res => res.data)
      .catch(error => {
        // handle error
        console.log(error);
      });
    if (res) {
      alert('update success');
      console.log('update success', res);
      props.closeModal(false);
    }
  };
  const deleteUser = async () => {
    const res = await axios
      .delete('https://jsonplaceholder.typicode.com/users/' + form.id)
      .then(res => res.data)
      .catch(error => {
        // handle error
        console.log(error);
      });
    if (res) {
      alert('delete success');
      console.log('delete success',res);
    }
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.closeModal(!modalVisible);
        }}>
          
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
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
            <View style={styles.button}>
              <Button
                // disabled={id ? false : true}
                title="Update users"
                onPress={updateUser}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Delete user"
                onPress={deleteUser}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Close modal"
                onPress={() => props.closeModal(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
  },
});

export default App;
