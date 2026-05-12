import { gray } from '@/app/styles/colors'
import { fonts } from '@/app/styles/fonts'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: gray[300],
    borderRadius: 32,
    backgroundColor: gray[100],
  },
  input: {
    flex: 1,
    color: gray[700],
    fontFamily: fonts.bold,
  },
})
