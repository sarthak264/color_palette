import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {AppContext} from '../context/AppContext';

const ColorCard = ({color}) => {
  const {setCopeiedColor} = useContext(AppContext);
  const copyToClipboard = () => {
    setCopeiedColor(color);
    Clipboard.setString(color);
    // fetchCopiedText();
  };
  // const fetchCopiedText = async () => {
  //   const text = await Clipboard.getString();
  //   console.log(text);
  // };
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      marginBottom: 5,
    },
    color: {
      width: '100%',
      height: 150,
      backgroundColor: color,
      borderRadius: 5,
    },
    text: {
      fontSize: 19,
      fontWeight: '600',
      color: '#464b5d',
      marginTop: 5,
      textAlign: 'center',
    },
  });
  return (
    <TouchableWithoutFeedback onPress={copyToClipboard}>
      <View style={styles.card}>
        <View style={styles.color}></View>
        <Text style={styles.text}>{color}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ColorCard;
