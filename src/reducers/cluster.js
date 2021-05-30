import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { client } from '../utils/index'

export const getAllCluster = createAsyncThunk('cluster/getAll',
    async () => {
        const { data: clusters } = client('/cluster')
        return clusters
    })

const clusterSlice = createSlice({
    name: 'cluster',
    initialState: { data: [] },
    reducers: {

    },
    extraReducers: {
        [getAllCluster.fulfilled]: (state, action) => {
            state.data = action.payload
        }
    }
})

export default clusterSlice.actions