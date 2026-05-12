import { gray, purple } from '@/app/styles/colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useState } from 'react'
import { TextInput, View } from 'react-native'
import { styles } from './styles'

export function Input() {
  const [focused, setFocused] = useState(false)
  return (
    <View style={[styles.container, focused && { borderColor: purple.base }]}>
      <MaterialIcons
        name='calendar-month'
        size={20}
        color={focused ? purple.base : gray[600]}
      />
      <MaterialIcons
        name='attach-money'
        size={20}
        color={focused ? purple.base : gray[600]}
      />
      <TextInput
        style={styles.input}
        placeholder='Titulo ou cliente'
        placeholderTextColor={gray[400]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  )
}
