import { createSlice } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    value: null
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer