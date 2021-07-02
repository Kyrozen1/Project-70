import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            titleText:"",
            authorText:"",
            storyText:"",
        }
    }
    render(){
        return(
            <View>
            <Header
              style={{marginTop:100}}
                backgroundColor={'#ffb6c1'}
                centerComponent={{
                    text: 'Story Hub',
                    style: {color: '#000000', fontSize: 20, fontWeight: 'bold'},
                }}
            />
            <View style={styles.inputView}>
            <View style={styles.inputView}>
            <TextInput
                style={styles.inputBox}
                onChangeText={text=>this.setState({titleText:text})}
                placeholder="Story Title"
                value={this.state.titleText}
            />
            </View>
            <View style={styles.inputView}>
            <TextInput
                style={styles.inputBox}
                onChangeText={text=>this.setState({authorText:text})}
                placeholder="Author"
                value={this.state.authorText}
            />
            </View>
            <View style={styles.inputView}>
            <TextInput
                style={styles.inputBox3}
                onChangeText={text=>this.setState({storyText:text})}
                placeholder="Write your story"
                value={this.state.storyText}
            />
            </View>
            </View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputView:{
        flexDirection: 'column',
        margin: 20,
        color:"black",
        marginLeft:38,
    },
    inputBox:{
        width:200,
        height:40,
        fontSize:18,
        borderWidth:1.5,
        color:"black",
    },
    inputBox3:{
      width:200,
      height:40,
      fontSize:18,
      borderWidth:1.5,
      color:"black",
      height:100,
    },
    submitButton:{
        width: 100,
        height: 50,
        backgroundColor: '#ffb6c1',
        marginLeft:130,
    },
    submitButtonText:{
        padding:10,
        textAlign:'center',
        fontWeight:'bold',
        color:'black',
        fontSize:20,
    }
})