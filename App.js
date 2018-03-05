import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './src/Router';
import reducers from './src/reducers';

type Props = {};
export default class App extends Component<Props> {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDpGgGYiq4dCQDO8dxmXWZpfzzK-qqpVXU',
      authDomain: 'manager-f411e.firebaseapp.com',
      databaseURL: 'https://manager-f411e.firebaseio.com',
      projectId: 'manager-f411e',
      storageBucket: '',
      messagingSenderId: '972801242098'
    };

    firebase.initializeApp(config);
  }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RouterComponent />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
