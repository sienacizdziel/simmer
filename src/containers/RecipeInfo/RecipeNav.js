import React, {useState} from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { NavData } from './NavData';
import './RecipeNav.css';

export default function RecipeNav() {
    const [sidebar, setSidebar] = useState(true);

    return (
        <>
          <IconContext.Provider value={{ color: '#fff' }}>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items'>
                {NavData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                        <span>{item.title}</span>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </>
      );
}
