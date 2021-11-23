import React from 'react';
import type {Node} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import OnBoarding from './components/OnBoarding';
import OnBoarding from 'react-native-onboarding-swiper';
import slides from './slides';


export default App = () =>{
  return(
    <OnBoarding
    slides={[
      {
        backgroundColor: '#fff',
        image: '',
        title: 'Onboarding',
        subtitle: '',
      },
    ]}
    />
    // <View style={styles.container}>
    //   <OnBoarding/>
    //   <StatusBar style="auto"/>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9A22B8',
    //backgroundcolor: 'rgb (0, 125, 169)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



