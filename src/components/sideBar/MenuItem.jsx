import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function MenuItem(props) {

  const { menu, onClick, exact } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={ onClick }>
      <NavLink exact={ exact } to={ menu.to } className="menu-item" href="#" onClick={ () => setExpand(!expand) }>
        <div className="menu-icon">
          <i class="bi bi-cloud-arrow-down"></i>
        </div>
        <span>
          { menu.name }
        </span>
      </NavLink>
      { menu.subMenuItems && menu.subMenuItems.length > 0 ? (
        <ul className={ `sub-menu ${expand ? "active-sub" : ""}` }>
          { menu.subMenuItems.map((item, index) => (
            <>
              <li key={ item.id }>
                <NavLink to={ item.to } href="sum menu 1">{ item.name }</NavLink>
              </li>
            </>
          )) }
        </ul>
      ) : null
      }
    </li >
  )
}
