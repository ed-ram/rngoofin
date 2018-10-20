import React from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';

class App extends React.Component {
    componentWillMount(){
        firebase
    }
    render(){
        <View>
          <Header headerText="Autho Time" />
          <Text>need to do lms activation</Text>
        </View>
    }
}

export default App;