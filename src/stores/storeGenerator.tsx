/** @format */

import React, {createContext, useContext} from 'react'

export function storeGenerator<T>(storeInstance) {
  const storeContext = createContext<T>(new storeInstance())

  const StoreProvider = ({children}) => {
    const store = new storeInstance()
    return (
      <storeContext.Provider value={store}>{children}</storeContext.Provider>
    )
  }

  const useStore = () => {
    const store = useContext<T>(storeContext)
    if (!store) {
      // this is especially useful in TypeScript so you don't need to be checking for null all the time
      throw new Error('useStore must be used within a StoreProvider.')
    }
    return store
  }

  return {
    StoreProvider,
    useStore
  }
}
