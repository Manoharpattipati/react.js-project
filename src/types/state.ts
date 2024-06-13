export interface DataState {
  data: any[] // Specify a more specific type if possible
  loading: boolean
  error: Error | null
}

export interface RootState {
  dataReducer: {
    data: any[] // Replace any[] with a more specific type if possible
  }
}
