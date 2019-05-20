import createSelector from 'selectorator'
import { getInstrumentsById } from './instruments'
import { getCountriesById } from './countries'

export const normalize = (instruments, countries, raw) => ({
  id: raw.id,
  parent: raw.parent,
  login: raw.login,

  country: countries[raw.country],
  countryCode: raw.countryCode,
  currency: instruments[raw.currency],

  paidTill: raw.paidTill * 1000,
  subscription: raw.subscription,

  changed: raw.changed * 1000
})

export const getUsersById = createSelector(
  [getInstrumentsById, getCountriesById, 'data.user'],
  (instruments, countries, users) => {
    const result = {}
    for (const id in users) {
      result[id] = normalize(instruments, countries, users[id])
    }
    return result
  }
)

export const getUser = (state, id) => getUsersById(state)[id]