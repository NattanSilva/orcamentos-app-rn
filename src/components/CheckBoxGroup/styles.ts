import { gray } from '@/app/styles/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: gray[400],
  },
  radio: {
    borderRadius: 999,
  },
})
