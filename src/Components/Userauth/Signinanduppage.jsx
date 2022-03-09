import './Signinanduppage.style.scss';
import Signin from './Signin.component';
import Signup from './Signup.component';

export default function Signinandup() {
  return (
    <div className='signinanduppage'>
      <Signin />
      <Signup />
    </div>
  );
}
