import * as React from 'react';
import {StyleSheet,View,Alert} from 'react-native';
import { Appbar,TextInput,Button,Text } from 'react-native-paper';
import { setProvidesAudioData } from 'expo/build/AR';

export default class App extends React.Component {
  _goBack = () => console.log('Went back');

  _handleMore = () => console.log('Shown more');
  
  state = {
    number1: 0,
    number2: 0,
    operator:'',
    ans:''
  };
  calculate=()=>{
    const num1
    const num1
    const ans
    try {
      num=parseFloat(this.state.number1)
      try {
        num=parseFloat(this.state.number1)
      } catch{
        Alert.alert("enter some numaric value for number 2 from try and catch")
      }
    } catch {
      Alert.alert("enter some numaric value for number 1 from try and catch")
    }
    if(this.state.number1!=='')
    {
      if(this.state.number2!=='')
      {
        if(this.state.operator==='+')
        {
          this.setState({ans:parseFloat(this.state.number1)+parseFloat(this.state.number2)})
          alert(this.state.ans)
        }
        else if(this.state.operator==='-')
        {
          this.setState({ans:parseFloat(this.state.number1)-parseFloat(this.state.number2)})
        }
        else if(this.state.operator==='*')
        {
          this.setState({ans:parseFloat(this.state.number1)*parseFloat(this.state.number2)})
        }
        else if(this.state.operator==='/')
        {
          this.setState({ans:parseFloat(this.state.number1)/parseFloat(this.state.number2)})
        }
        else
        {
          Alert.alert("Invalid Operator")
        }
      }
      else
      {
        Alert.alert("enter some numaric value for number 2")
      }
    }
    else
    {
      Alert.alert("enter some numaric value for number 1")
    }
    
  }
  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
            <View>
                  <Appbar.Header>
                    <Appbar.BackAction
                      onPress={this._goBack}
                    />
                    <Appbar.Content
                      title="Calculater"
                      subtitle="Basic Operations"
                      style={{alignItems:"center"}}
                    />
                    <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
                  </Appbar.Header>

                  <TextInput
                  label='Number1'
                  mode="outlined"
                  value={this.state.text}
                  onChangeText={text => this.setState({ number1:text })}
                  style={{margin:5}}
                  />
                  <TextInput
                  label='Number2'
                  mode="outlined"
                  value={this.state.text}
                  onChangeText={text => this.setState({ number2:text })}
                  style={{margin:5}}
                  />
                  <Text>this.state.ans</Text>
          </View>

          <View style={{flexDirection:"row",marginLeft:35}}>
              <Button 
                mode="contained"
                style={{width:50,margin:10}}
                onPress={()=>{this.setState({'operator' : '+'})}}
                >
                +
                </Button>

                <Button 
                mode="contained"
                style={{width:50,margin:10}}
                onPress={()=>{this.setState({'operator' : '-'})}}
                >
                -
                </Button>
                <Button 
                mode="contained"
                style={{width:50,margin:10}}
                onPress={()=>{this.setState({'operator' : '*'})}}
                >
                *
                </Button>

                <Button 
                mode="contained"
                style={{width:50,margin:10}}
                onPress={()=>{this.setState({'operator' : '/'})}}
                >
                /
                </Button>
          </View>
                <Button 
                mode="contained"
                onPress={this.calculate}
                style={{margin:10}}
                >
                Calculate
                </Button>
          <View>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text:{
    color:"red",
    fontWeight:"bold",
    fontSize:20,
  },
});
