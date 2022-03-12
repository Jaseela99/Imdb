import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    movies:[]
}

const movieSlice = createSlice ({
    name:"movie",
    initialState,
    //reducer takes in action and updates the state
    reducer:{
        //takes in state and action
        setMovies: (state,action)=>{
            state.movies = action.payload;
        }
    }

})

export const {setMovies} = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;