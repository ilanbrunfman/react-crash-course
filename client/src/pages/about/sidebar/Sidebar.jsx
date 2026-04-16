// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Sidebar.scss';
import { aboutPages } from "../uiData"

const Sidebar = () => {

    const navLink =  ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'
    const sortedAboutPages = [...aboutPages].sort((a, b) => a.label.localeCompare(b.label))

    return(
        <aside className="ui-sidebar-container">
            <div className="ui-sidebar-header"></div>
            <ul className="ui-sidebar-nav">
                {sortedAboutPages.map(page => (
                    <li key={page.slug}>
                        <NavLink className={navLink} to={`/about/${page.slug}`}>{page.label}</NavLink>
                    </li>
                ))}
            </ul>
            <div className="ui-sidebar-footer"></div>
        </aside>
    )
}

export default Sidebar