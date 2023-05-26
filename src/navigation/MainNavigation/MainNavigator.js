import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tracklist from '../../pages/Tracklist';
import Playlist from '../../pages/Playlist/Playlist';
import TrackDetails from '../../pages/TrackDetails/TrackDetail';
import Signin from '../../modules/Auth/Signin';

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="/Signin" options={{ headerShown: false }} component={Signin} /> */}
      <Stack.Screen name="/" options={{ headerShown: false }} component={Playlist} />
      <Stack.Screen name="/Tracklist" options={{ headerShown: false }} component={Tracklist} />
      <Stack.Screen name="/TrackDetails" options={{ headerShown: false }} component={TrackDetails} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
