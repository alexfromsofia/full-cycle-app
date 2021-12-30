import { configureStore } from "@reduxjs/toolkit"
import counter from "./slices/counter"
import price from "./slices/price"

declare global {
  interface Window {
    __PRELOADED_STATE__: any
  }
}

export const store = configureStore({
  reducer: {
    counter,
    price,
  },
  preloadedState: window.__PRELOADED_STATE__,
})

if (window.__PRELOADED_STATE__) {
  delete window.__PRELOADED_STATE__
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
