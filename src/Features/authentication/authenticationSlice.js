import { createSlice  , createAsyncThunk} from "@reduxjs/toolkit";
import axios , {keyAPI} from "../../common/api/axios";
export const login =createAsyncThunk('token' , async () => {
    if(localStorage.getItem('token')){
        const token = localStorage.getItem('token');
        return token

    }else{
        const token = await axios.get(`authentication/token/new?api_key=${keyAPI}`).then(res => res.data);
        localStorage.setItem('token', token.request_token)
        return token.request_token

    }
})
 
const authenticationSlice = createSlice({
    name:'authentication',
    initialState:{
        token:'',
        userName:'',
        error:[]
    },extraReducers(builder){
        builder.addCase(login.pending, (state)=>{
            console.log(state)
        }).addCase(login.fulfilled , (state , {payload})=>{
            state.token = payload
        }).addCase(login.rejected, (state, {payload})=>{
            state.error =payload
        })
    }
})
export default authenticationSlice.reducer