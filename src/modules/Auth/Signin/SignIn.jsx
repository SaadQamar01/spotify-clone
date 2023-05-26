import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { authorize, refresh, revoke } from 'react-native-app-auth';
import styles from './style';

const Login = ({
    //actions
    login,
    callInProcess,
    //store
    navigation,
    isLoading,
}) => {

    const config = {
        clientId: '45d1cbd7405e4f7a92d07c526748e71d',
        redirectUrl: 'http://localhost:8081/',
        scopes: ['user-read-private', 'user-read-email'],
        serviceConfiguration: {
            authorizationEndpoint: 'https://accounts.spotify.com/authorize',
            tokenEndpoint: 'https://accounts.spotify.com/api/token',
            revocationEndpoint: 'https://accounts.spotify.com/api/token'
        }
    };

    const authenticateSpotify = async () => {
        try {
            const result = await authorize(config);
            console.log('Result', result);
            console.log('Access token:', result.accessToken);
            console.log('Refresh token:', result.refreshToken);
        } catch (error) {
            console.log('Authentication error:', error);
        }
    };

    return (
        <View>
            <Text>Login with Spotify</Text>
            <Button
                onPress={authenticateSpotify}
                title="Login with Spotify"
                color="#841584"
            />
        </View>
    );
};

export default Login;
