import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authenticate, client } from '../utils/index'

export const login = createAsyncThunk('user/getMe', async ({ payload }) => {
    const { data: user } = await authenticate('login', payload)
    if (user.token) {
        return user
    }
})
export const signup = createAsyncThunk('user/signup', async ({ payload }) => {
    const { data: user } = await authenticate('signup', payload)
    if (user.token) {
        return user
    }
})
export const getMe = createAsyncThunk('user/getme', async () => {
    const { data: user } = await client('/auth/getMe')

    return { token: localStorage.getItem('token'), ...user }
})

const userSlice = createSlice({
    name: 'user',
    initialState: { isFetching: true, data: { token: localStorage.getItem('token') } },
    reducers: {
        logout(state, action) {
            state = {}
            localStorage.removeItem('token')
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.data = action.payload || {}
            state.isFetching = false
        },
        [signup.fulfilled]: (state, action) => {
            state.data = action.payload || {}
            state.isFetching = false

        },
        [getMe.fulfilled]: (state, action) => {
            state.data = action.payload
            state.isFetching = false

        }
    }
})

export const { logout } = userSlice.actions
export default userSlice.reducer