import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
    </View>;
}
const Details = () => {
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
    </View>;
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
