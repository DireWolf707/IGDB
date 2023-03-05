import { createSlice } from "@reduxjs/toolkit"

const dataSlice = createSlice({
  name: "data",
  initialState: {
    searchTerm: "",
    selectedGameId: null,
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    resetSearchTerm(state, action) {
      state.searchTerm = ""
    },
    changeSelectedGameId(state, action) {
      state.selectedGameId = action.payload
    },
    resetSelectedGameId(state, action) {
      state.selectedGameId = null
    },
  },
})

export const { changeSearchTerm, resetSearchTerm, changeSelectedGameId, resetSelectedGameId } = dataSlice.actions
export const dataReducer = dataSlice.reducer
