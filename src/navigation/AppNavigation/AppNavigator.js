import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import MainNavigator from '../MainNavigation';
const AppNavigator = ({ initialLoading, callInProcess }) => {
  const loader = () => {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  // if (initialLoading) {
  //   return loader();
  // }
  return (
    <View style={styles.shownContent}>
      <MainNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  shownContent: {
    flex: 1,
    opacity: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppNavigator.propTypes = {};

export default AppNavigator;
