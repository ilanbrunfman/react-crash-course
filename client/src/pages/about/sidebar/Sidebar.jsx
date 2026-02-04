// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Sidebar.scss';
import { aboutPages } from "../uiData"

const Sidebar = () => {

    const navLink =  ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'
    const sortedAboutPages = [...aboutPages].sort((a, b) => a.label.localeCompare(b.label))

    return(
        <aside className="sidebar-container">
            <div className="sidebar-header"></div>
            <div className="sidebar-nav">
                <ul>
                    {sortedAboutPages.map(page => (
                        <li key={page.slug}>
                            <NavLink className={navLink} to={`/about/${page.slug}`}>{page.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sidebar-footer"></div>
        </aside>
    )
}

export default Sidebar