import React from 'react';
import '@styles/MenuNav.scss';
import search from '@icons/search.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import AppContext from '@context/AppContext';
import { useContext } from 'react';

const MenuNav = () => {

    const [sidebar , setSidebar] = useState(false);

    const {addSearch} = useContext(AppContext);

    const handleMenu = () => {
        setSidebar(!sidebar);
    };

    const handleSearch = () => {
        const textSearch = document.getElementById('textSearch');
        addSearch(textSearch.value);
    }

    return (
        
        <nav>
            <div className="div-iconMenu" onClick={()=>handleMenu()}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" 
                className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"><path fill="currentColor" 
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                </path></svg>
            </div>

            <div className={!sidebar?"div-nav-mobile-false":"div-nav-mobile-active"}>
                <nav className="nav-mobile">
                    <ul>
                        <li>
                            <NavLink exact activeClassName="active" onClick={()=>handleMenu()}   to="/"> <p> Home </p></NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" onClick={()=>handleMenu()} to="/chicken"> <p>Chicken</p></NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" onClick={()=>handleMenu()} to="/meat"> <p>Meat </p></NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" onClick={()=>handleMenu()} to="/bbq"><p> BBQ</p></NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" onClick={()=>handleMenu()} to="/fastfood"> <p>Fast</p></NavLink>
                        </li>         
                        <li>
                            <NavLink activeClassName="active" onClick={()=>handleMenu()} to="/pasta"> <p>Pasta</p> </NavLink>
                        </li> 
                    </ul>
                </nav>
            </div>

            
            <div className="navbar-left">
                <ul>
                    <li>
                        <NavLink exact activeClassName="active"  to="/"> <p> Home </p></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/chicken"> <p>Chicken</p></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/meat"> <p>Meat </p></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/bbq"><p> BBQ</p></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/fastfood"> <p>Fast</p></NavLink>
                    </li>         
                    <li>
                        <NavLink activeClassName="active" to="/pasta"> <p>Pasta</p> </NavLink>
                    </li>                         
                </ul>
            </div>

            <div className="navbar-right">
                <input type="text" placeholder="Example: Pizza" id="textSearch"/>
                <NavLink activeClassName="activeSearch" to="/search"><img src={search} alt="lupa" onClick={()=>handleSearch()}/></NavLink>
            </div>
        </nav>
    );
}

export default MenuNav;