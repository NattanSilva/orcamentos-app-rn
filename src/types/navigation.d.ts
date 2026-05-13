export type RootStackParamList = {
  home: undefined
  filter: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
