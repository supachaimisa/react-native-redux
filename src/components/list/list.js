import React, {useState, useMemo} from 'react';

import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import {useSelector} from 'react-redux';
import Modal from '../modal/modal';
export default function list() {
  const userReducer = useSelector(state => state.userReducer.value);
  const darkModeReducer = useSelector(state => state.darkModeReducer.value);
  const [user, setUser] = useState({});
  const users = useMemo(() => userReducer, [userReducer]);
  const [tmpToggle, setTmpToggle] = useState(false);
  const backgroundStyle = {
    backgroundColor: darkModeReducer,
  };
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: darkModeReducer,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 14,
            }}>
            This is ScrollView place
          </Text>

          {users.map((item, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                onLongPress={() => {
                  setTmpToggle(true);
                  setUser({...item});
                }}
                //Here is the trick
                activeOpacity={0.6}>
                <View
                  style={{
                    backgroundColor: idx % 2 === 0 ? '#000000' : '#111111',
                    paddingTop: 20,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 18,
                    }}>
                    name: {item.name}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: idx % 2 === 0 ? '#000000' : '#111111',
                    paddingTop: 20,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 14,
                    }}>
                    email: {item.email}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <Modal toggle={tmpToggle} closeModal={v => setTmpToggle(v)} user={user} />
    </>
  );
}

