import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rooms from '../components/Rooms/Rooms';
import SingleChatRoom from '../components/Rooms/SingleChatRoom/SingleChatRoom';
import Header from '../components/Header/Header';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Rooms' component={Rooms} options={{
            header: () => <Header />
          }} />
          <Stack.Screen name='SingleChatRoom' component={SingleChatRoom} options={({ navigation }) => ({
          header: () => <Header navigation={navigation}/>
        })
          }/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default Routes;