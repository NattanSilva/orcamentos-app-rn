import { gray, purple } from '@/app/styles/colors'
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

  // círculo base (não selecionado)
  radio: {
    width: 22,
    height: 22,
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: gray[400],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  // círculo selecionado (fundo roxo)
  radioSelected: {
    backgroundColor: purple.base,
    borderColor: purple.base,
  },

  // bolinha branca central
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#fff',
  },
})
