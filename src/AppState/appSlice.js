import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'filter',
  initialState: {students: false, staff:false},
  reducers: {
    activeStudents: (active) => ({
        ...active,
        students:true,
        staff:false
    }),
    activeStaff: (active) => ({
        ...active,
        students:false,
        staff:true
    }),
  },
})

// Action creators are generated for each case reducer function
export const { activeStudents, activeStaff } = appSlice.actions

export default appSlice.reducer