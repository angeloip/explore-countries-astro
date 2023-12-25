import { create } from 'zustand'
import { type Countries } from '../types'

interface State {
  countries: Countries[] | null
  setCountries: (countries: Countries[] | null) => void
}

export const useCountriesStore = create<State>((set) => ({
  countries: null,
  setCountries: (countries) => set({ countries })
}))
