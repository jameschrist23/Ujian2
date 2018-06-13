import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

class GameScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 1,
      timeOut: false,
      timeOutCounter: 20,
    }
  }

  render() {
    setTimeout(() => this.setState({timeOutCounter: this.state.timeOutCounter - 1}), 1000);
    if ( this.state.number > 20 ){ this.state.timeOut = 'winner' };
    if ( this.state.timeOutCounter === 0 && this.state.timeOut !== 'winner' ){ this.state.timeOut = true };
    let Nama = this.props.navigation.getParam('Name','');
    if ( this.state.timeOut === false ){
    return(
        <View style={styles.mainView}>
            <Text style={styles.nameStyle}>{Nama}</Text>

            <View style={{alignItems: 'center'}}>

              <View style={{flexDirection: 'row'}}>
                <View style={[styles.kotak, {marginLeft: -1}]}>
                  <Text style={{fontSize: 20}}>1</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>2</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>3</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>4</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>5</Text>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={[styles.kotak, {marginLeft: -1, borderColor: 'red'}]}>
                  <Text style={{fontSize: 20}}>6</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>7</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>8</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>9</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>10</Text>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={[styles.kotak, {marginLeft: -1}]}>
                  <Text style={{fontSize: 20}}>11</Text>
                </View>
                <View style={[styles.kotak, {borderColor: 'red'}]}>
                  <Text style={{fontSize: 20}}>12</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>13</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>14</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>15</Text>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={[styles.kotak, {marginLeft: -1}]}>
                  <Text style={{fontSize: 20}}>16</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>17</Text>
                </View>
                <View style={[styles.kotak, {borderColor: 'red'}]}>
                  <Text style={{fontSize: 20}}>18</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>19</Text>
                </View>
                <View style={styles.kotak}>
                  <Text style={{fontSize: 20}}>20</Text>
                </View>
              </View>

            </View>
            <Text style={{marginTop: 30, fontSize: 20, color: 'black'}}> Current Number:   {this.state.number}</Text>
            <View style={{marginTop: 20}}>
              <Button title={'Dice!'} onPress={() => this.addNumber()}/>
            </View>
            <Text style={{ marginTop: 20, fontSize: 30}}>{this.state.diceNum}</Text>
            <Text style={{fontSize: 13}}> If current number is 6, 12, or 18, then current number -5 ! </Text>
            <Text>{this.state.timeOutCounter}</Text>
        </View>
    )} else if ( this.state.timeOut ===  true ){
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30, marginLeft: -10}}> Game over</Text>
        </View>
      )
    } else if ( this.state.timeOut === 'winner' ){
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30, marginLeft: -10}}> Winner!</Text>
        </View>
      )
    }
  }

  addNumber() {
    const Num = Math.floor(Math.random()*6);
    this.setState({ number: this.state.number + Num });
    this.setState({ diceNum: Num });
    if(this.state.number%6 === 0) {
      this.setState({ number: this.state.number - 5 })
    }
  }

}

export default GameScreen;

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20
  },
  mainView: {
    padding: 20
  },
  kotak: {
    height: 70,
    width: 70,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})



