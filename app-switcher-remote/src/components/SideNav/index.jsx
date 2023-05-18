import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../../index.css'
import classnames from 'classnames';


const SideNav = () => {
 

const apps = [
  {
    id: 'grassn',
    name: 'GrassN',
  },
  {
    id: 'tankmix',
    name: 'TankMix',
  },
];

   return (
    <>
        <nav className="w-64">
          <div className="flex flex-col gap-4">
            {apps.map(({ id, name }) => (
              <Link
                key={id}
               to={`/${id}`}
               onClick={(event) => {
                event.preventDefault();
                console.log('Test link clicked!');
              }}
                className={classnames('border-2 rounded-md p-4 cursor-pointer hover:bg-blue-50', { 'bg-blue-200': location.pathname === `/${id}` })}
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
   </>
   )
}

export default SideNav;