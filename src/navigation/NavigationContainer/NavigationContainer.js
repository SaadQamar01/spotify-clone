/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../AppNavigation';
import { rootNavigationRef } from '../RootNavigation';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const NavigatorContainer = ({ token, identifyAuthUser }) => {
  // const [activeTab, setActiveTab] = useState(null);
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const tokenFromLocal = await AsyncStorage.getItem('token');
  //       identifyAuthUser({token: tokenFromLocal});
  //     } catch (err) {
  //       console.log('err --> ', err);
  //     }
  //   })();
  // }, [identifyAuthUser, token]);

  // useEffect(() => {
  //   (async () => {
  //     const visited = await AsyncStorage.getItem('visited');
  //     let user = await AsyncStorage.getItem('user');
  //     const token = await AsyncStorage.getItem('token');
  //     if (visited) {
  //       if (!!user || !!token) {
  //         setActiveTab('TabNavigator');
  //       } else {
  //         setActiveTab('Login');
  //       }
  //     } else {
  //       setActiveTab('OnBoarding');
  //     }
  //     setIsReady(true);
  //   })();
  // }, [identifyAuthUser, token]);

  // if (!isReady || !activeTab) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  // const initialRoute = {
  //   index: 1,
  //   routes: [
  //     {
  //       name: activeTab,
  //     },
  //   ],
  // };

  return (
    <NavigationContainer ref={rootNavigationRef}>
      {/* <NavigationContainer ref={rootNavigationRef} initialState={initialRoute}> */}
      <AppNavigator />
    </NavigationContainer>
  );
};

NavigatorContainer.propTypes = {};

export default NavigatorContainer;
