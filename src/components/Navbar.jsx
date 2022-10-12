import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <nav className='navbar__nav'>
          <h3 className='nav__brand'>
            <Link to='/'>
              <i class='fas fa-video' />  Cuevana 3000
            </Link>
          </h3>
          <ul className='nav__links'>
            <li className='links__link'>
              <Link to='/'>Inicio</Link>
            </li>
            <li className='links__link'>
              <Link to='/about'>Acerca de nosotros</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
