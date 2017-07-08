import React from 'react'
import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'

export const Nav = StackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'Home',
		},
	},
})
