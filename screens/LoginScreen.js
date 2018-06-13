import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
    }
  }

  render() {
    return(
        <View style={styles.mainView}>
          <View style={styles.TextInputStyle}>
            <TextInput
              underlineColorAndroid={'transparent'}
              placeholder={'Insert Name'}
              onChangeText={(text) => this.setState({name: text})}
            />
          </View>
          <View>
            <Button
              title={'Next Page'}
              onPress={() => this.props.navigation.navigate('Game', {Name: this.state.name})}
            />
          </View>
        </View>
    )
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInputStyle: {
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black'
  }
})
