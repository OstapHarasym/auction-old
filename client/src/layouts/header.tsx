import logo from '../assets/icon.png';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <nav className="relative flex justify-between container mx-auto p-6">
      <div className="flex items-left">
        <div className='flex'>
          <img src={logo} />
          <h1>Auction</h1>
        </div>
      </div>
      <div className='flex items-right'>
        <div>
          <NavLink to='/lots'>Lots</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header;