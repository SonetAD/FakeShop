import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.style.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/Auth';

export default function Header() {
  const auth = useContext(AuthContext);
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
        {auth.email ? (
          <NavLink
            style={(active) => (active.isActive ? styledLink : {})}
            to='/signout'
          >
            <div
              onClick={() => {
                auth.Signout();
                console.log(auth);
              }}
            >
              Sig out
            </div>
          </NavLink>
        ) : (
          <NavLink
            style={(active) => (active.isActive ? styledLink : {})}
            to='/signin'
          >
            Sign in
          </NavLink>
        )}
      </div>
    </div>
  );
}
