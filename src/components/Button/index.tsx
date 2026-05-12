import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'
import { dangerStyles, primaryStyles, secondaryStyles } from './styles'

type ButtonProps = TouchableOpacityProps & {
  variant?: 'primary' | 'secondary' | 'danger'
  iconName: keyof typeof MaterialIcons.glyphMap
  label?: string
}

function getVariantStyles(variant: string) {
  switch (variant) {
    case 'primary':
      return primaryStyles
    case 'secondary':
      return secondaryStyles
    case 'danger':
      return dangerStyles
    default:
      return primaryStyles
  }
}

export function Button({ variant = 'primary', iconName, label }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={getVariantStyles(variant).container}
    >
      <MaterialIcons
        name={iconName}
        size={24}
        color={getVariantStyles(variant).label.color}
      />
      {!!label && <Text style={getVariantStyles(variant).label}>{label}</Text>}
    </TouchableOpacity>
  )
}
