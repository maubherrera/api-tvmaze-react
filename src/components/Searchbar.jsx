import { useState, useContext } from 'react'
import Showscontext from '../context/shows/showsContext'
import Alert from './Alert'
import AlertsContext from '../context/alerts/alertsContext'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { searchShows } = useContext(Showscontext)

  const { alert, setAlert } = useContext(AlertsContext)

  const onSearchHandler = (e) => {
    e.preventDefault()

    if (searchTerm === '') {
      setAlert('Por favor ingresa tu búsqueda', 'danger')
    } else {
      searchShows(searchTerm)
    }
  }
  return (
    <div className='searchbar'>
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}

      <form className='searchbar__form'>
        <input
          type='text' placeholder='Busca tu serie' value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='btn btn-block' onClick={onSearchHandler}>BUSCAR</button>
      </form>
    </div>
  )
}

export default Searchbar
