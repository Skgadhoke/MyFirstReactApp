import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import UpdateState from './UpdateState';

/**
  React Native Example - how to get user input and display the changes to input on screen
 */
const UserInput = () => {
    const [text, setText] = useState('');
    return (
        <View style={{padding: 10}}>
            <TextInput 
            style ={{height: 40}}
            placeholder="text here"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            />
            <UpdateState text={text} />
        </View>
    );
};

export default UserInput;