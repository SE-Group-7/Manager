import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Table } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}> Manager </Text>
      <Button
        title="Tables"
        onPress={() => navigation.navigate('Tables')}
      />
      <Button
        title="Menu"
        onPress={() => navigation.navigate('Menu')}
      />
      <Button
        title="Timesheet"
        onPress={() => navigation.navigate('Timesheet')}
      />
      <Button
        title="Analytics"
        onPress={() => navigation.navigate('Analytics')}
      />
    </View>
  );
}

function TablesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}> This is the tables screen</Text>
      <Text style={styles.table}> Table 1</Text>
      <Text style={styles.table}> Table 2</Text>
      <Text style={styles.table}> Table 3</Text>
    </View>
  )
}

function MenuScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}> This is the Menu screen</Text>
      <Text style={styles.menuItem}>Menu Item 1</Text>
      <Text>Menu Item 1 Description</Text>
      <Text style={styles.menuItem}>Menu Item 2</Text>
      <Text>Menu Item 2 Description</Text>
      <Text style={styles.menuItem}>Menu Item 3</Text>
      <Text>Menu Item 3 Description</Text>
      <Text style={styles.menuItem}>Menu Item 4</Text>
      <Text>Menu Item 4 Description</Text>
    </View>
  )
}

function TimesheetScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}> This is the Timesheet screen</Text>
    </View>

  )
}

function AnalyticsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}> This is the Analytics screen</Text>
    </View>
  )
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Manager Account" component={HomeScreen} />
        <Stack.Screen name="Tables" component={TablesScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Timesheet" component={TimesheetScreen} />
        <Stack.Screen name="Analytics" component={AnalyticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize:30,
    fontWeight: 'bold',
  },
  table: {
    marginTop: 20,
    width: 120,
    height: 120,
    backgroundColor: '#4287f5',
  },
  menuItem:{
    marginTop:10,
    fontSize:20,
  },
});