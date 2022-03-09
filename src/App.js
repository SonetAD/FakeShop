import './Components/GLOBAL.style.scss';
import './Fontawsome';
import Shop from './Components/Pages/Shop/Shoppage.component';
import React, { Component } from 'react';
import Homepage from './Components/Pages/Home/Homepage.component';
import { Navigate, Route, Routes } from 'react-router-dom';
import Menuitem from './Components/Menuitem/Menuitem.component';
import Hat from './Components/Hat/Hat.component';
import Header from './Components/Header/Header.component.jsx';
import Signinandup from './Components/Userauth/Signinanduppage';
import withAuthContext, { AuthContext } from './Firebase/Auth';
import Errorpage from './Components/Pages/Error/Errorpage.component';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/collection/:item' element={<Menuitem />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/signin' element={<Signinandup />} />
          <Route path='/signout' element={<Navigate to='/' />} />
          <Route path='/FakeShop' element={<Navigate to='/' />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
      </>
    );
  }
}

export default withAuthContext(App);
