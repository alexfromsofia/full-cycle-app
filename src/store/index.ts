import { configureStore } from "@reduxjs/toolkit"
import { canUseDOM } from "../utils"
import counter from "./slices/counter"

declare global {
  interface Window {
    __PRELOADED_STATE__: any
    __APOLLO_STATE__: any
  }
}

export const store = canUseDOM
  ? configureStore({
      reducer: {
        counter,
      },
      preloadedState: window.__PRELOADED_STATE__,
    })
  : configureStore({
      reducer: {
        counter,
      },
    })

if (canUseDOM) {
  if (window.__PRELOADED_STATE__) {
    delete window.__PRELOADED_STATE__
  }
  if (window.__APOLLO_STATE__) {
    delete window.__APOLLO_STATE__
  }
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
