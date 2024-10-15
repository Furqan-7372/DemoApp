import {StatusBar, StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoryScreen from './screens/CategoryScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return <Drawer.Navigator 
  screenOptions={{
    headerStyle: {backgroundColor: '#351401'},
    headerTintColor: 'white',
    sceneContainerStyle: {backgroundColor: '#3f2f25'},
  }}
  >
    <Drawer.Screen name='AllCategory' component={CategoryScreen}/>
    <Drawer.Screen name='Favorites' component={FavoriteScreen}/>
  </Drawer.Navigator>
}

function App() {
  return (
    <View style={{backgroundColor: '#24180f', flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      {/* <FavoritesContextProvider> */}
      <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
            options={({route, navigation}) => {
              const catId = route.params.categoryId;
              return {
                title: catId,
              };
            }}
          />
          <Stack.Screen
            name="Meal Detail Screen"
            component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
