import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../Pages/Main';
import NewEntry from '../Pages/NewEntry';
import Report from '../Pages/Report';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="NewEntry" component={NewEntry} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
