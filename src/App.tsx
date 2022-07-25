import React, {useState} from 'react';
import Users from './pages/Users/UserContainer';

import { useLocation , Route, Routes } from 'react-router-dom';

import style from './app.module.scss';
import Sidebar from './components/Sidebar';
import PageHeader from './components/PageHeader';
import Home from './pages/Home';
import Else from './pages/Else';

function App() {
  const [menu, setMenu]= useState<boolean>(false)
  const namePathname = useLocation().pathname.split('/')[1];

  const menuBtn = (visible:boolean)=>{
    setMenu(visible)
  }

  return (
    <div className={style.app}>
      <div className={style.sidebar}>
        <Sidebar menuBtn={menuBtn} menuVisible={menu}/>
      </div>
      <div className={style.page}>
      <PageHeader namePages={namePathname} menuBtn={menuBtn}/>
        <div className={style.currentPage}>
          <Routes>
              <Route path='/'  element={<Home />} />
              <Route path='/users/*' element={<Users />} />
              <Route path='/*' element={<Else />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
