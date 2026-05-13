import { Text, View, type ViewProps } from 'react-native'
import {
  approvedStyles,
  declinedStyles,
  draftStyles,
  sentStyles,
} from './styles'

export enum StatusTypes {
  SENT = 'sent',
  DRAFT = 'draft',
  APPROVED = 'approved',
  DECLINED = 'declined',
}

type StatusProps = ViewProps & {
  type: StatusTypes
}

export function Status({ type, ...rest }: StatusProps) {
  function getTitle(type: StatusProps['type']) {
    switch (type) {
      case 'sent':
        return 'Enviado'
      case 'draft':
        return 'Rascunho'
      case 'approved':
        return 'Aprovado'
      case 'declined':
        return 'Recusado'
      default:
        return type
    }
  }

  function getStyles(type: StatusProps['type']) {
    switch (type) {
      case 'sent':
        return sentStyles
      case 'draft':
        return draftStyles
      case 'approved':
        return approvedStyles
      case 'declined':
        return declinedStyles
      default:
        return sentStyles
    }
  }

  return (
    <View style={getStyles(type).container} {...rest}>
      <View style={getStyles(type).icon} />
      <Text style={getStyles(type).title}>{getTitle(type)}</Text>
    </View>
  )
}
