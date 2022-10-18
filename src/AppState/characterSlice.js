import { createSlice } from '@reduxjs/toolkit'

export const charSlice = createSlice({
  name: 'characters',
  initialState: {characters: [], filterCharacters:[], favorites:[]},
  reducers: {
    setCharacters: (state, action) => ({
        ...state,
        characters: action.payload,
        filterCharacters: action.payload
    }),
    setFilterCharacters: (state, action) => {
        const results = state.characters.filter(obj => {
            if(action.payload.students){
                return obj.hogwartsStudent;
            }else if(action.payload.staff){
                return obj.hogwartsStaff;
            }else{
                return obj
            }
        });

        return {
            ...state,
            filterCharacters: results
        }
    },
    addToFavorites: (state, action) => ({
        ...state,
        favorites: [...state.favorites, {...action.payload.data} ]
    }),
    removeFromFavorites: (state, action) =>{
        const newArray = state.favorites.filter((el) =>{
            return el.name !== action.payload.data.name
        });
        return {
            ...state,
            favorites: newArray
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCharacters, setFilterCharacters, addToFavorites, removeFromFavorites } = charSlice.actions

export default charSlice.reducer