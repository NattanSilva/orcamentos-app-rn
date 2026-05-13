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
  iconName?: keyof typeof MaterialIcons.glyphMap
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

export function Button({
  variant = 'primary',
  iconName,
  label,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={variant === 'primary' ? 0.8 : 0.6}
      style={getVariantStyles(variant).container}
      {...rest}
    >
      {!!iconName && (
        <MaterialIcons
          name={iconName}
          size={16}
          color={getVariantStyles(variant).label.color}
        />
      )}
      {!!label && <Text style={getVariantStyles(variant).label}>{label}</Text>}
    </TouchableOpacity>
  )
}
