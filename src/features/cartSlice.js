import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {} // id -> { id, name, price, qty, thumbnail }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const p = action.payload
      if (state.items[p.id]) return
      state.items[p.id] = { ...p, qty: 1 }
    },
    increase: (state, action) => {
      const id = action.payload
      if (state.items[id]) state.items[id].qty += 1
    },
    decrease: (state, action) => {
      const id = action.payload
      if (state.items[id]) {
        state.items[id].qty -= 1
        if (state.items[id].qty <= 0) {
          delete state.items[id]
        }
      }
    },
    removeItem: (state, action) => {
      const id = action.payload
      delete state.items[id]
    },
    clearCart: (state) => {
      state.items = {}
    }
  }
})

export const { addItem, increase, decrease, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
