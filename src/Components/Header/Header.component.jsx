import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.style.scss';
import { NavLink } from 'react-router-dom';
export default function Header() {
  const styledLink = {
    color: '#333',
    fontWeight: 'bolder',
    fontStyle: 'italic',
    transform: 'scale(1.1)',
  };
  return (
    <div className='header'>
      <NavLink className='icon' to='/'>
        <div>
          <FontAwesomeIcon size='2x' icon='bag-shopping' />
          <span>FakeShop</span>
        </div>
      </NavLink>
      <div className='options'>
        <NavLink style={(active) => (active.isActive ? styledLink : {})} to='/'>
          Home
        </NavLink>
        <NavLink
          style={(active) => (active.isActive ? styledLink : {})}
          to='/shop'
        >
          Shop
        </NavLink>
      </div>
    </div>
  );
}
