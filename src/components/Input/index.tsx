import { gray, purple } from '@/app/styles/colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useState } from 'react'
import { TextInput, View, type ViewProps } from 'react-native'
import { styles } from './styles'

type InputProps = ViewProps & {
  iconName: keyof typeof MaterialIcons.glyphMap
}

export function Input({ iconName, ...rest }: InputProps) {
  const [focused, setFocused] = useState(false)
  
  return (
    <View
      style={[styles.container, focused && { borderColor: purple.base }]}
      {...rest}
    >
      <MaterialIcons
        name={iconName}
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
