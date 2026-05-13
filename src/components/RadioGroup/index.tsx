import Checkbox from 'expo-checkbox'
import { useState } from 'react'
import { Text, View, type ViewProps } from 'react-native'
import { styles } from './styles'

export enum OrdenationTypes {
  OLDEST = 'oldest',
  NEWEST = 'newest',
  HIGHER = 'higher',
  LOWER = 'lower',
}

type RadioBoxProps = ViewProps & {
  options: OrdenationTypes[]
}

export function RadioBoxGroup({ options, ...rest }: RadioBoxProps) {
  const [selected, setSelected] = useState<OrdenationTypes | null>(null)

  function getLabel(option: OrdenationTypes) {
    switch (option) {
      case OrdenationTypes.OLDEST:
        return 'Mais antigo'
      case OrdenationTypes.NEWEST:
        return 'Mais recente'
      case OrdenationTypes.HIGHER:
        return 'Maior valor'
      case OrdenationTypes.LOWER:
        return 'Menor valor'
    }
  }

  return (
    <View style={styles.container} {...rest}>
      {options.map((option) => {
        const checked = selected === option

        return (
          <View key={option} style={styles.optionContainer}>
            {/* RADIO */}
            <View style={[styles.radio, checked && styles.radioSelected]}>
              <Checkbox
                value={checked}
                onValueChange={() => setSelected(option)}
                style={{
                  opacity: 0,
                  position: 'absolute',
                }}
              />

              {checked && <View style={styles.radioInner} />}
            </View>

            <Text>{getLabel(option)}</Text>
          </View>
        )
      })}
    </View>
  )
}
