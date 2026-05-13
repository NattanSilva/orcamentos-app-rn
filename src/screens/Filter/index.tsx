import { gray } from '@/app/styles/colors'
import { Button } from '@/components/Button'
import { CheckBoxGroup } from '@/components/CheckBoxGroup'
import { Header } from '@/components/Header'
import { RadioBoxGroup, type OrdenationTypes } from '@/components/RadioGroup'
import { type StatusTypes } from '@/components/Status'
import type { StackRoutesProps } from '@/routes'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useEffect, useRef } from 'react'
import { Animated, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function Filter({ navigation }: StackRoutesProps<'filter'>) {
  const translateY = useRef(new Animated.Value(500)).current
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start()
  }, [])

  function close() {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 500,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.goBack()
    })
  }

  return (
    <Animated.View style={[styles.overlay, { opacity }]}>
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={close} />

      <Animated.View
        style={[styles.container, { transform: [{ translateY }] }]}
      >
        <Header>
          <Text style={styles.title}>Filtrar e ordenar</Text>

          <TouchableOpacity onPress={close}>
            <MaterialIcons name='close' size={24} color={gray[600]} />
          </TouchableOpacity>
        </Header>

        <View style={styles.bodyContainer}>
          <Text style={styles.label}>Status</Text>
          <CheckBoxGroup
            options={['draft', 'sent', 'approved', 'declined'] as StatusTypes[]}
          />
          <Text style={styles.label}>Ordenação</Text>
          <RadioBoxGroup
            options={
              ['oldest', 'newest', 'higher', 'lower'] as OrdenationTypes[]
            }
          />
        </View>

        <View style={styles.footerContainer}>
          <Button label='Resetar filtros' variant='secondary' onPress={close} />
          <Button label='Aplicar' iconName='check' onPress={close} />
        </View>
      </Animated.View>
    </Animated.View>
  )
}
