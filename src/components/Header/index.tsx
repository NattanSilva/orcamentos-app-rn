import { View, type ViewProps } from 'react-native'
import { styles } from './styles'

export function Header({ children }: ViewProps) {
  return <View style={styles.container}>{children}</View>
}
