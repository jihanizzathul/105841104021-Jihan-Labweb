import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SortByPage from './SortByPage';
import FilterPage from './FilterPage';

const Tab = createBottomTabNavigator();

const SearchTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' }, // Gaya tab secara global
      }}
    >
      <Tab.Screen 
        name="SortByPage" 
        component={SortByPage} 
        options={{ 
          tabBarLabel: 'Sort By', 
          tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold' }, // Gaya khusus untuk tab Search
        }} 
      />
      <Tab.Screen 
        name="filterPage" 
        component={FilterPage} 
        options={{ 
          tabBarLabel: 'filter', 
          tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold' }, // Gaya khusus untuk tab Advanced Search
        }} 
      />

    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
