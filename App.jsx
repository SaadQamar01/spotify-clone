import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import { createEpicMiddleware } from 'redux-most';
import NavigationContainer from './src/navigation/NavigationContainer';
import appEpic from './src/store/app.epics';
import appReducer from './src/store/app.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(appEpic);
export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}

export default App;





// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Tracklist from './src1/pages/tracklist/tracklist';
// import Playlist from './src1/pages/playlist/playlist';
// import TrackDetails from './src1/pages/trackDetails';
// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator >
//         <Stack.Screen name="/" options={{ headerShown: false }} component={Playlist} />
//         <Stack.Screen name="/Tracklist" options={{ headerShown: false }} component={Tracklist} />
//         <Stack.Screen name="/TrackDetails" options={{ headerShown: false }} component={TrackDetails} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }


// export default App;


// const styles = StyleSheet.create({

// });
