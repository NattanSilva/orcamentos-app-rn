import { Home } from '@/screens/Home'
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'
import { useFonts } from 'expo-font'

export function App() {
  const [loaded, error] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  })

  if (!loaded && !error) {
    return null
  }

  return <Home />
}
