import { purple } from '@/app/styles/colors'
import Checkbox from 'expo-checkbox'
import { useState } from 'react'
import { View, type ViewProps } from 'react-native'
import { Status, type StatusTypes } from '../Status'
import { styles } from './styles'

type CheckBoxGroupProps = ViewProps & {
  options: StatusTypes[]
}

export function CheckBoxGroup({ options, ...rest }: CheckBoxGroupProps) {
  const [selected, setSelected] = useState<StatusTypes[]>([])

  function toggleOption(option: StatusTypes) {
    setSelected((prev) => {
      const isSelected = prev.includes(option)

      if (isSelected) {
        return prev.filter((item) => item !== option)
      }

      return [...prev, option]
    })
  }

  return (
    <View style={styles.container} {...rest}>
      {options.map((option) => {
        const checked = selected.includes(option)

        return (
          <View key={option} style={styles.optionContainer}>
            <Checkbox
              value={checked}
              onValueChange={() => toggleOption(option)}
              color={checked ? purple.base : undefined}
              style={styles.checkbox}
            />

            <Status type={option} />
          </View>
        )
      })}
    </View>
  )
}
