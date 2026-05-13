import { gray } from '@/app/styles/colors'
import { fonts } from '@/app/styles/fonts'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 16,
    padding: 8,
    backgroundColor: gray[100],
    borderRadius: 16,
    borderWidth: 1,
    borderColor: gray[200],
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    flex: 1,
    flexShrink: 1,
    fontFamily: fonts.bold,
    fontSize: 16,
    color: gray[700],
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  subtitle: {
    color: gray[600],
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
  },
  moneyIcon: {
    color: gray[600],
    fontSize: 12,
  },
  totalPrice: {
    color: gray[700],
    fontFamily: fonts.bold,
    fontSize: 18,
  },
  
})
