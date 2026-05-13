import { Routes } from '@/routes'
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'
import { useFonts } from 'expo-font'
import 'react-native-gesture-handler'

export function App() {
  const [loaded, error] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  })

  if (!loaded && !error) {
    return null
  }

  return <Routes />
}
