import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { client } from '../utils/index'

export const getCluster = createAsyncThunk('cluster/get', async (clusterId) => {
    const { data: cluster } = await client(`/schedule/${clusterId}`)
    return cluster
})

const clusterSlice = createSlice({
    name: 'cluter',
    initialState: {
        isFetching: true,
        data: {}
    },
    reducers: {},
    extraReducers: {
        [getCluster.fulfilled]: (state, action) => {
            state.data = action.payload
            state.isFetching = false
        }
    }
})

export default clusterSlice.reducer