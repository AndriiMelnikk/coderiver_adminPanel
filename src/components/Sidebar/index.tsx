import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import IconLogo from '../../img/icons/sidebar/logo.png';
import { ReactComponent as IconOverview} from '../../img/icons/sidebar/Overview.svg';
import { ReactComponent as  IconUsers} from '../../img/icons/sidebar/Users.svg';
import { ReactComponent as  IconIdeas} from '../../img/icons/sidebar/Ideas.svg';
import { ReactComponent as  IconContacts} from '../../img/icons/sidebar/Contacts.svg';
import { ReactComponent as  IconAgents} from '../../img/icons/sidebar/Agents.svg';
import { ReactComponent as  IconArticles} from '../../img/icons/sidebar/Articles.svg';
import { ReactComponent as  IconSettings} from '../../img/icons/sidebar/Settings.svg';
import { ReactComponent as  IconSubscription} from '../../img/icons/sidebar/Subscription.svg';
import { ReactComponent as IconClose} from '../../img/icons/static/close.svg';

import style from './sidebar.module.scss';

interface Props{
  menuBtn:(visible: boolean)=> void;
  menuVisible:boolean;
}

const Sidebar: FC<Props> = ({menuBtn, menuVisible}) =>  {

  const menuClose =()=>{
    menuBtn(false)
}

  return (
    <div className={menuVisible ? [style.sidebar, style.active].join(' ') : style.sidebar}>
        <div className={style.sidebar_brand_box}>
          <span className={style.img_logo}>
            <img src={IconLogo} alt="logo" />
          </span>
          <span className={style.name_admin}>Dashboard</span>
          <button className={style.closeBtn} onClick={menuClose}> <IconClose/> </button>
        </div>
        <div className={style.sidebar_content}>
          <ul onClick={menuClose}>
            <li>
              <NavLink to='/overview' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconOverview/></span>
                <span className={style.name_sidebar}>Overview</span>
              </NavLink>
              
            </li>
            <li>
              <NavLink to='/users' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconUsers/></span>
                <span className={style.name_sidebar}>Users</span>
              </NavLink> 
            </li>
            <li>
              <NavLink to='/ideas' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconIdeas/></span>
                <span className={style.name_sidebar}>Ideas</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/contacts' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconContacts/></span>
                <span className={style.name_sidebar}>Contacts</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/agents' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconAgents/></span>
                <span className={style.name_sidebar}>Agents</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/articles' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconArticles/></span>
                <span className={style.name_sidebar}>Articles</span>
              </NavLink>
            </li>
            <li className={style.line_sidebar}><hr /></li>
            <li>
              <NavLink to='/settings' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconSettings/></span>
                <span className={style.name_sidebar}>Settings</span>
              </NavLink>
            </li>
            <li> 
              <NavLink to='/subscription' className={({ isActive }) => (isActive ? style.active : "")}>
                <span className={style.icon_sidebar}><IconSubscription/></span>
                <span className={style.name_sidebar}>Subscription</span>
              </NavLink>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Sidebar;
