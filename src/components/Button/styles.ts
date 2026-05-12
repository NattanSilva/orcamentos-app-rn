import { danger, gray, purple } from '@/app/styles/colors'
import { StyleSheet } from 'react-native'

const primaryStyles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    gap: 4,
    backgroundColor: purple.base,
  },
  label: {
    color: gray[100],
    fontSize: 16,
  },
})

const secondaryStyles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    gap: 4,
    backgroundColor: gray[100],
    borderWidth: 1,
    borderColor: gray[300],
  },
  label: {
    color: purple.base,
    fontSize: 16,
  },
})

const dangerStyles = StyleSheet.create({
  ...secondaryStyles,
  label: {
    color: danger.base,
    fontSize: 16,
  },
})

export { dangerStyles, primaryStyles, secondaryStyles }
