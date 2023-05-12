import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

/**
  React Native Example - how to update state based on user input
 */
    const UpdateState = props => {
    const [name, setName] = useState('default state');
    const onClickHandler = () => {
        setName(props.text);
      }
    return (
        <View style={{padding: 10}}>
            <Text> {name} </Text>
            <Button title="Click Me :)" onPress={onClickHandler}></Button>
        </View>
    );
};

export default UpdateState;