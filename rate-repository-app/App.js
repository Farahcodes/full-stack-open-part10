import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';
import { registerRootComponent } from 'expo';

// Main component
import Main from './src/components/Main';
// Utils
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

registerRootComponent(App);

export default function App() {
  console.log(Constants.expoConfig);
  return (
    <ApolloProvider client={apolloClient}>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </ApolloProvider>
  );
}

