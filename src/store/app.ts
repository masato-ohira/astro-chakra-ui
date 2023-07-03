import { atom, useRecoilState } from 'recoil'

export const appMode = atom({
  key: 'app/mode',
  default: false,
})

export const useApp = () => {
  const [mode, setMode] = useRecoilState(appMode)

  return {
    mode,
    setMode,
  }
}
