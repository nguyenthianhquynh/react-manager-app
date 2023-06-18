import { useState, useEffect } from "react";
import Icon from "../Icon/Icon";
import {
  faBars,
  faHome,
  faFire,
  faCake,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import menus from "helps/menus";
import SideNavItem from "./side-nav-item";

const Nav = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const [items, setItems] = useState(menus);
  // get menus from src/helps/menus.js
  // const items = menus;
  const setMenu = (items, menuName) => {
    const newItems = { ...items };
    Object.keys(newItems).map((key) => {
      if (newItems[key].submenu) {
        if (key === menuName) {
          newItems[key].isExpand = !newItems[key].isExpand;
        } else {
          if (newItems[key].submenu) {
            if (newItems[key].submenu[menuName]) {
              newItems[key].submenu[menuName].isExpand =
                !newItems[key].submenu[menuName].isExpand;
            } else {
              setMenu(newItems[key].submenu, menuName);
            }
          } else {
            newItems[key].isExpand = !newItems[key].isExpand;
          }
        }
      }
    });

    setItems(newItems);
  };

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileSidebar = (
    <>
      <div className="w-contain-icon d-flex justify-content-center align-items-center">
        <Icon icon={faBars} />
      </div>
      <div className="w-contain-icon d-flex justify-content-center align-items-center">
        <Icon icon={faHome} />
      </div>
      <div className="w-contain-icon d-flex justify-content-center align-items-center">
        <Icon icon={faFire} />
      </div>
      <div className="w-contain-icon d-flex justify-content-center align-items-center">
        <Icon icon={faCake} />
      </div>
    </>
  );

  const desktopSidebar = (
    <>
      <nav>
        <div className="main-navbar">
          {/* <div className="left-arrow" id="left-arrow">
            <Icon icon={faArrowLeft} />
          </div> */}
          <div id="mainnav">
            <ul className="nav-menu custom-scrollbar p-1">
              <li className="sidebar-main-title">
                <div className="p-3 text-center">
                  <h6>MY PROJECT </h6>
                </div>
              </li>
              {Object.keys(items).map((key, index) => {
                const item = items[key];
                return (
                  <SideNavItem
                    key={index}
                    {...item}
                    onToggleMenu={setMenu.bind(this, items)}
                  />
                );
              })}
            </ul>
          </div>
          {/* <div className="right-arrow" id="right-arrow">
            <Icon icon={faArrowRight} />
          </div> */}
        </div>
      </nav>
    </>
  );

  return (
    <div className="border left-side">
      <div className="mt-2">{mobile ? mobileSidebar : desktopSidebar}</div>
    </div>
  );
};

export default Nav;
