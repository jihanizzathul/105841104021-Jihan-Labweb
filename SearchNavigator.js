import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchPage from './SearchPage';
import SearchPage2 from './SearchPage2';
import SearchPage3 from './SearchPage3';

const Tab = createBottomTabNavigator();

const SearchTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' }, // Gaya tab secara global
      }}
    >
      <Tab.Screen 
        name="SearchPage" 
        component={SearchPage} 
        options={{ 
          tabBarLabel: 'Search', 
          tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold' }, // Gaya khusus untuk tab Search
        }} 
      />
      <Tab.Screen 
        name="SearchPage2" 
        component={SearchPage2} 
        options={{ 
          tabBarLabel: 'Advanced Search', 
          tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold' }, // Gaya khusus untuk tab Advanced Search
        }} 
      />
      <Tab.Screen 
        name="SearchPage3" 
        component={SearchPage3} 
        options={{ 
          tabBarLabel: 'Search take a photo', 
          tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold' }, // Gaya khusus untuk tab Advanced Search
        }} 
      />
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
