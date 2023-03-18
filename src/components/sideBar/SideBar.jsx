import React, { useEffect, useState } from "react";
import logo from '../../assets/images/logo/webscript.png';
import user from '../../assets/images/user.jpg';
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";



function SideBar(props) {

  const menuItems = useSelector((state) => state.menuItems.value);
  console.log("hi ",menuItems);

  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll('.sub-menu').forEach(el => {
        el.classList.remove("active-sub");
      })
    }
    props.onCollapse(inactive);
  }, [inactive])

  return <div className={ `side-bar ${inactive ? 'side-bar-inactive' : ''}` }>
    <div className="top-section">
      <div className="logo">
        <img src={ logo } alt="webscript" />
      </div>
      <div className="toggle-menu-btn" onClick={ () => setInactive(!inactive) }>
        { inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i> }
      </div>
    </div>
    <div className="search-controller">
      <button className="search-btn">
        <i class="bi bi-search"></i>
      </button>
      <input type="text" placeholder="search" />
    </div>
    <div className="devider"></div>
    <div className="main-menu">
      <ul>
        { menuItems.map((item, index) => (
          <MenuItem
            exact={ item.exact }
            menu={ item }
            key={ item.id }
            onClick={ () => {
              if (inactive) {
                setInactive(false)
              }
            } }
          />
        )) }
      </ul>
    </div>
    <div className="side-menu-footer">
      <div className="avatar">
        <img src={ user } alt="user" />
      </div>
      <div className="user-info">
        <h5>Chathura Janadara</h5>
        <p>chathura@gmail.com</p>
      </div>
    </div>
  </div>
}

export default SideBar;

