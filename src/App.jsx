// paquetes
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// componentes
import Navbar from './components/Navbar'

// paginas
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Singlepage from './pages/Singlepage'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' componentent={Aboutpage} />
          <Route path='/singleshow/:id' component={Singlepage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
