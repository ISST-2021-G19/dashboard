import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer, Stack } from 'edoc/modules/navigation'
import { AuthProvider } from 'edoc/modules/auth'
import { SubjectListScreen } from 'edoc/modules/subjectList'
import { SurveyStatsScreen } from 'edoc/modules/surveyStats'
import { store } from 'edoc/store';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SubjectList" component={SubjectListScreen} />
            <Stack.Screen name="SurveyStats" component={SurveyStatsScreen} />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}
