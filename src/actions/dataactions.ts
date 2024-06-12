import axios from 'axios'
import { Dispatch } from 'redux'

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://api.example.com/data')
      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: 'FETCH_DATA_ERROR',
        payload: error,
      })
    }
  }
}
