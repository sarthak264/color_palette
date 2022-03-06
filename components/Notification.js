import React, {useContext, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {AppContext} from '../context/AppContext';

const Notification = () => {
  const {copeiedColor} = useContext(AppContext);
  // const [y, setY] = useState(-70);
  const y = useRef(new Animated.Value(-70)).current;
  useEffect(() => {
    if (copeiedColor.length > 0) {
      Animated.timing(y, {
        toValue: 0,
        useNativeDriver: true,
        duration: 200,
      }).start();
      setTimeout(() => {
        Animated.timing(y, {
          toValue: -80,
          useNativeDriver: true,
          duration: 300,
        }).start();
      }, 700);
    }
  }, [copeiedColor]);

  const styles = StyleSheet.create({
    notification: {
      position: 'absolute',
      top: 10,
      zIndex: 1000,
      width: '90%',
      backgroundColor: '#0c1226',
      borderRadius: 50,
      paddingVertical: 10,
      paddingHorizontal: 20,
      transform: [{translateY: y}],
    },
    notificationTxt: {color: '#fff', fontSize: 19, textAlign: 'center'},
  });
  return (
    <Animated.View style={styles.notification}>
      <Text style={styles.notificationTxt}>
        Color {copeiedColor} copied to your clipboard.
      </Text>
    </Animated.View>
  );
};

export default Notification;
