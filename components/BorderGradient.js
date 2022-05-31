import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BorderGradient = () => {
  return (
    <>
      <LinearGradient
        colors={['#cc2b5e', '#753a88']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <View style={styles.innerContainer}>
          <Text style={styles.buttonText}>GRADIENT BORDER</Text>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={['#cc2b5e', '#753a88']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[
          styles.linearGradient,
          {marginTop: 15, width: 150, borderRadius: 75}, // <-- Overwrites the preceding style property
        ]}>
        <View style={[styles.innerContainer, {borderRadius: 75}]}>
          <Text style={styles.buttonText}>GRADIENT BORDER CIRCLE</Text>
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 150,
    width: 200,
    borderRadius: 20, // <-- Outer Border Radius
  },
  innerContainer: {
    borderRadius: 15, // <-- Inner Border Radius
    flex: 1,
    margin: 5, // <-- Border Width
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#cc2b5e',
    backgroundColor: 'transparent',
  },
});

export default BorderGradient;