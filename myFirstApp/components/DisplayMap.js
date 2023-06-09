import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});
const DisplayMap = () => {
    return (
    <View>
        <Text>Map</Text>
        <MapView 
        style={styles.map}
        region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}></MapView>
    </View>
    )
}
export default DisplayMap;