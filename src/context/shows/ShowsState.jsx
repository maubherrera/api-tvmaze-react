import { useReducer } from 'react'
import axios from 'axios'
import ShowsContext from './showsContext'
import ShowsReducer from './showsReducer'
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW
} from '../types'

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false
  }

  const [state, dispatch] = useReducer(ShowsReducer, initialState)

  const searchShows = async (searchTerm) => {
    dispatch({ type: SET_LOADING })

    // peticion con axios
    const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)

    console.log(data)

    dispatch({
      type: SEARCH_SHOWS,
      payload: data
    })
  }
  // funcion para el llamado de las series a ruta de manera individual
  const getSingleShow = async (id) => {
    dispatch({
      type: SET_LOADING
    })

    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}?embed=cast`)

    console.log(data)
    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data
    })
  }

  const clearSingleShow = () => {
    dispatch({
      type: CLEAR_SINGLE_SHOW
    })
  }

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
        getSingleShow,
        clearSingleShow
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  )
}

export default ShowsState
