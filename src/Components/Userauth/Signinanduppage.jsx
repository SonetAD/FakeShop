import './Signinanduppage.style.scss';
import Signin from './Signin.component';
import Signup from './Signup.component';
import withAuth from '../../Firebase/Auth';

function Signinandup() {
  return (
    <div className='signinanduppage'>
      <Signin />
      <Signup />
    </div>
  );
}

export default withAuth(Signinandup);
