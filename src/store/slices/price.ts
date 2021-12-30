import { createSlice } from "@reduxjs/toolkit"

export interface PriceState {
  [key: string]: number
}

const initialState: PriceState = {
  ETH: 0,
}

export const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {},
})

export default priceSlice.reducer
