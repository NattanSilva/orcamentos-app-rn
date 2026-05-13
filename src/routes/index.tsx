import { Filter } from '@/screens/Filter'
import { Home } from '@/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  type StackScreenProps,
} from '@react-navigation/stack'

export type StackRoutesList = {
  home: undefined
  filter: undefined
}

export type StackRoutesProps<T extends keyof StackRoutesList> =
  StackScreenProps<StackRoutesList, T>

const Stack = createStackNavigator<StackRoutesList>()

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen
          name='filter'
          component={Filter}
          options={{
            presentation: 'transparentModal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
