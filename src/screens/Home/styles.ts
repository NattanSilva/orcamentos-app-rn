import { gray, purple, white } from '@/app/styles/colors'
import { fonts } from '@/app/styles/fonts'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray[200],
    fontFamily: fonts.regular,
    paddingTop: 50,
  },
  title: {
    fontFamily: fonts.bold,
    color: purple.base,
    fontSize: 24,
  },
  subtitle: {
    fontFamily: fonts.regular,
    color: gray[500],
    fontSize: 12,
  },
  bodyContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
})
