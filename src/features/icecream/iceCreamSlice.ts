import { createSlice , PayloadAction} from "@reduxjs/toolkit"
import { ordered as cakedOrdered } from "../cake/cakeSlice"
type InitialState = {
    numOfIceCreams : number
}
const initialState : InitialState = {
    numOfIceCreams : 20
}

const iceCreamSlice = createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered : state => {
            state.numOfIceCreams--
        },
        restocked : (state,action:PayloadAction<number>)=>{
            state.numOfIceCreams += action.payload
        }
    },
    // extraReducers:{
    //     ['cake/ordered'] :(state) =>{
    //         state.numOfIceCreams--
    //     }

    // }
    extraReducers :(builder) =>{
        builder.addCase(cakedOrdered,(state)=>{
            state.numOfIceCreams--
        })
    }
})

export default iceCreamSlice.reducer
export const { ordered,restocked } = iceCreamSlice.actions