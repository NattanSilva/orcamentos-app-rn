import React from 'react'
import { Text, View, type ViewProps } from 'react-native'

import { Status } from '../Status'
import { styles } from './styles'

type Item = {
  id: number
  client: string
  title: string
  items: {
    name: string
    quantity: number
    price: number
  }[]
  status: string
  createdAt: string
  updatedAt: string
  discountPct?: number
}

type ItemCardProps = ViewProps & {
  data: Item
}

function calculateTotal(
  items: { quantity: number; price: number }[],
  discountPct?: number,
) {
  const total = items.reduce((a, b) => a + b.quantity * b.price, 0)
  return discountPct ? total * (1 - discountPct / 100) : total
}

export function ItemCard({ data, ...rest }: ItemCardProps) {
  return (
    <View {...rest} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Status type={data.status.toLowerCase() as any} />
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{data.client}</Text>
        <View style={styles.totalContainer}>
          <Text style={styles.moneyIcon}>R$</Text>
          <Text style={styles.totalPrice}>
            {calculateTotal(data.items, data.discountPct).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  )
}
