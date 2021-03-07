import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { wipeData, updateData } from 'store/commonActions'
import { DataStore, Diff } from 'types'
import { applyDiff } from './applyDiff'
import { mergeDiffs } from './mergeDiffs'

interface DataSlice {
  current: DataStore
  server?: DataStore
  diff?: Diff
}

const makeDataStore = () => ({
  serverTimestamp: 0,
  instrument: {},
  user: {},
  merchant: {},
  country: {},
  company: {},
  reminder: {},
  reminderMarker: {},
  account: {},
  tag: {},
  budget: {},
  transaction: {},
})

// INITIAL STATE
const initialState: DataSlice = {
  current: makeDataStore(),
  server: undefined,
  diff: undefined,
}

// SLICE
const { reducer, actions } = createSlice({
  name: 'data',
  initialState,
  reducers: {
    applyServerPatch: (state, { payload }: PayloadAction<Diff>) => {
      if (!payload) return
      state.server ??= makeDataStore()
      applyDiff(payload, state.server)
      state.current = state.server
      state.diff = undefined
    },
    applyLocalPatch: (state, { payload }: PayloadAction<Diff>) => {
      if (!payload) return
      applyDiff(payload, state.current)
      if (!state.diff) state.diff = { ...payload }
      else mergeDiffs(state.diff, payload)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(wipeData, () => initialState)
      .addCase(updateData, (state, { payload }) => {
        if (!payload) return
        const diff = payload.data

        state.server ??= makeDataStore()
        applyDiff(diff, state.server)
        state.current = state.server
        // TODO: Тут хорошо бы не всё удалять, а только то что синхронизировалось (по времени старта). После этого надо ещё current пересобрать на основе серверных данных и диффа
        state.diff = undefined
      })
  },
})

// REDUCER
export default reducer

// ACTIONS
export const { applyServerPatch, applyLocalPatch } = actions
