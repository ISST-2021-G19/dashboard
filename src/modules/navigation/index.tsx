import React from 'react'
import {
  LinkingOptions,
  NavigationContainer as RNNavigationContainer,
  NavigationContainerProps,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const linking: LinkingOptions = {
  prefixes: [],
  config: {
    screens: {
      SubjectList: '/',
      SurveyStats: '/stats/:subjectId/:professorId',
    }
  }
}

const NavigationContainer = (props:NavigationContainerProps) =>
  <RNNavigationContainer {...props} linking={linking} />

const Stack = createStackNavigator()

export { NavigationContainer, Stack }