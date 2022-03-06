import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Notification from './components/Notification';
import ColorCard from './components/ColorCard';
import {FlatGrid} from 'react-native-super-grid';
import {AppProvider, AppContext} from './context/AppContext';

const App = () => {
  const [colors, setColors] = useState([]);
  const generatePalette = () => {
    const array = [];
    for (let i = 0; i < 4; i++) {
      const color = generateHex();
      array.push(color);
    }
    console.log(array);
    setColors(array);
  };
  const generateHex = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];
    return color;
  };
  useEffect(() => {
    generatePalette();
  }, []);
  return (
    <AppProvider>
      <SafeAreaView style={styles.safeArea}>
        <Notification />
        <ScrollView>
          <Text style={styles.mainHeading}>Color palette generator</Text>
          <View style={styles.cardsWrapper}>
            <FlatGrid
              spacing={15}
              data={colors}
              renderItem={({item}) => <ColorCard color={item} />}
            />
          </View>
          <TouchableOpacity
            style={styles.generateBtn}
            onPress={generatePalette}
            activeOpacity={0.9}>
            <Text style={styles.generateBtnText}>Generate Palette</Text>
          </TouchableOpacity>
          <Text style={styles.shakePhoneTxt}>
            Or just shake your phone to generate new palettes
          </Text>
        </ScrollView>
      </SafeAreaView>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8ecf3',
  },
  mainHeading: {
    fontSize: 33,
    fontWeight: '700',
    color: '#0c1226',
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  generateBtn: {
    width: '90%',
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#7e6cca',
    borderRadius: 5,
    alignSelf: 'center',
  },
  generateBtnText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  shakePhoneTxt: {
    color: '#464b5d',
    fontSize: 19,
    alignSelf: 'center',
    textAlign: 'center',
    paddingBottom: 20,
  },
});

export default App;
