import { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import appFonts from '../constants/app-fonts'

const useCacheResource = (): boolean => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)

  useEffect(() => {
    // load any resource data that is needed before user enter the app.
    const loadDataAsync = async (): Promise<void> => {
      try {
        // load fonts
        await Font.loadAsync({
          [appFonts.regular.name]: appFonts.regular.location,
          [appFonts.italic.name]: appFonts.italic.location,
          [appFonts.light.name]: appFonts.light.location,
          [appFonts.semiBold.name]: appFonts.semiBold.location,
          [appFonts.bold.name]: appFonts.bold.location,
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setIsLoadingComplete(true)
      }
    }

    loadDataAsync()
  }, [])

  return isLoadingComplete
}

export default useCacheResource
