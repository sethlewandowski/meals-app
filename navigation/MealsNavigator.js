import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
	Categories: {
		screen: CategoriesScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
			},
			headerTintColor: 'white',
		},
	CategoryMeals: {
		screen: CategoryMealsScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
			},
		headerTintColor: 'white',
		},
	},
	MealDetail: {
		screen: MealDetailScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
			},
		headerTintColor: 'white',
		},
});

export default createAppContainer(MealsNavigator); 

