import { danger, gray, info, success } from '@/app/styles/colors'
import { fonts } from '@/app/styles/fonts'
import { StyleSheet } from 'react-native'

const sentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: info.light,
    borderRadius: 8,
  },
  title: {
    color: info.base,
    fontFamily: fonts.bold
  },
  icon: {
    backgroundColor: info.base,
    borderRadius: '50%',
    width: 10,
    height: 10,
    opacity: 0.5,
  },
})

const draftStyles = StyleSheet.create({
  container: {
    ...sentStyles.container,
    backgroundColor: gray[300],
  },
  title: {
    color: gray[500],
  },
  icon: {
    ...sentStyles.icon,
    backgroundColor: gray[400],
    opacity: 0.8,
  },
})

const approvedStyles = StyleSheet.create({
  container: {
    ...sentStyles.container,
    backgroundColor: success.light,
  },
  title: {
    ...sentStyles.title,
    color: success.dark,
  },
  icon: {
    ...sentStyles.icon,
    backgroundColor: success.dark,
  },
})

const declinedStyles = StyleSheet.create({
  container: {
    ...sentStyles.container,
    backgroundColor: danger.light,
  },
  title: {
    ...sentStyles.title,
    color: danger.dark,
  },
  icon: {
    ...sentStyles.icon,
    backgroundColor: danger.dark,
  },
})

export { approvedStyles, declinedStyles, draftStyles, sentStyles }
