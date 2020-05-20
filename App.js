/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HMSLocation from 'react-native-hms-location';

const checkLocation = () => {
  console.log('checkLocation')
  try {

    const locationRequest = HMSLocation.FusedLocation.Request.configure({
      id: 'e0048e' + Math.random() * 10000,
      priority: HMSLocation.FusedLocation.PriorityConstants.PRIORITY_HIGH_ACCURACY,
      interval: 3,
      numUpdates: 10,
      fastestInterval: 1000.0,
      expirationTime: 200000.0,
      expirationTimeDuration: 200000.0,
      smallestDisplacement: 0.0,
      maxWaitTime: 2000000.0,
      needAddress: true,
      language: 'en',
      countryCode: 'en',
    }).build();

    const locationSettingsRequest = HMSLocation.FusedLocation.SettingsRequest.configure({
      locationRequests: [locationRequest],
      alwaysShow: false,
      needBle: false,
    }).build();

    HMSLocation.FusedLocation.Native.checkLocationSettings(locationSettingsRequest)
      .then(res => console.log(res))
      .catch(ex => console.log("Error while getting location settings. " + ex))

  } catch (err) {
    console.log(err)
  }
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={checkLocation}>
          <Text>Button A</Text>
        </TouchableOpacity>
      </View>


    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'green',
    padding: 30
  }
});

export default App;
