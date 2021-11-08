import { useCallback } from 'react'

// this will work just with materialize-css
export const useMessage = () => {
  return useCallback(text => {
    if (window.M && text) {
      window.M.toast({ html: text })
    }
  }, [])
}