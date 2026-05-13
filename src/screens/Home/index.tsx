import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { ItemCard } from '@/components/ItemCard'
import type { StackRoutesProps } from '@/routes'
import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'

const database = [
  {
    id: 1,
    client: 'João Silva',
    title: 'Desenvolvimento de Landing Page',
    items: [
      {
        name: 'Design UI/UX',
        quantity: 1,
        price: 800,
      },
      {
        name: 'Implementação Frontend',
        quantity: 1,
        price: 1500,
      },
    ],
    discountPct: 10,
    status: 'draft',
    createdAt: '2026-05-10T09:30:00',
    updatedAt: '2026-05-10T10:00:00',
  },
  {
    id: 2,
    client: 'Maria Oliveira',
    title: 'Sistema de Controle Financeiro',
    items: [
      {
        name: 'Backend API',
        quantity: 1,
        price: 2500,
      },
      {
        name: 'Integração com Banco',
        quantity: 1,
        price: 1200,
      },
    ],
    status: 'sent',
    createdAt: '2026-05-08T14:20:00',
    updatedAt: '2026-05-09T08:15:00',
  },
  {
    id: 3,
    client: 'Carlos Santos',
    title: 'Aplicativo Mobile',
    items: [
      {
        name: 'Tela de Login',
        quantity: 1,
        price: 500,
      },
      {
        name: 'Dashboard',
        quantity: 1,
        price: 1200,
      },
      {
        name: 'Publicação na Loja',
        quantity: 1,
        price: 700,
      },
    ],
    discountPct: 5,
    status: 'approved',
    createdAt: '2026-05-01T11:00:00',
    updatedAt: '2026-05-05T16:40:00',
  },
  {
    id: 4,
    client: 'Empresa XPTO',
    title: 'Manutenção de Website',
    items: [
      {
        name: 'Correção de Bugs',
        quantity: 3,
        price: 200,
      },
      {
        name: 'Atualização de Conteúdo',
        quantity: 2,
        price: 150,
      },
    ],
    status: 'declined',
    createdAt: '2026-04-28T13:10:00',
    updatedAt: '2026-04-29T09:45:00',
  },
]

export function Home({ navigation }: StackRoutesProps<'home'>) {
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
          <Input iconName='search' />
          <Button
            variant='secondary'
            iconName='filter-alt'
            onPress={() => navigation.push('filter')}
          />
        </View>

        <FlatList
          data={database}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemCard data={item} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item aqui.</Text>
          )}
        />
      </View>
    </View>
  )
}
