import { RootState } from "."

export const selectCounter = (state: RootState) => state.counter
export const selectEth = (state: RootState, key: string) => state.price[key]
