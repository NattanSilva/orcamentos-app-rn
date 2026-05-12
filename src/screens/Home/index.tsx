import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { Text, View } from 'react-native'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Header>
        <View>
          <Text style={styles.title}>Orçamentos</Text>
          <Text style={styles.subtitle}>Você tem 1 item em rascunho</Text>
        </View>
        <Button iconName='add' label='Novo' />
      </Header>
      <View style={styles.bodyContainer}>
        <View style={styles.filterContainer}>
          <Input />
          <Button variant='secondary' iconName='filter-alt' />
        </View>
      </View>
    </View>
  )
}
