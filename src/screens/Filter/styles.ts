import { gray, white } from '@/app/styles/colors'
import { fonts } from '@/app/styles/fonts'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  container: {
    width: '100%',
    height: '70%',
    backgroundColor: white,
    paddingTop: 32,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    overflow: 'hidden',
  },
  title: {
    fontFamily: fonts.bold,
    color: gray[700],
    fontSize: 16,
  },
  bodyContainer: {
    flex: 1,
    gap: 16,
    padding: 20,
  },
  label: {
    color: gray[500],
  },
  scrollContainer: {
    gap: 16,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 20,
    borderTopWidth: 1,

    borderTopColor: gray[300],
  },
})
