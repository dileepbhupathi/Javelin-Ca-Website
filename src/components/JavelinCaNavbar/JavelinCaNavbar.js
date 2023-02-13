import React, { useState } from "react";
import "./JavelinCaNavbar.scss";
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { TfiSearch } from "react-icons/tfi";
import { Input } from "antd";

export const JavelinCaNavbar = () => {
  const [menu, setMenu] = useState(false);
  const ToggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="javelin-ca-nav">
        <img
          src="https://jevelin.shufflehound.com/creative-agency/wp-content/uploads/sites/24/2018/09/logo2.png"
          alt="/"
          className="javelin-ca-nav-logo"
        />
        <div className="javelin-ca-nav-hamburger" onClick={ToggleMenu}>
          {menu ? (
            <RxCross1 className="cross-icon" />
          ) : (
            <SlMenu className="menu-icon" />
          )}
        </div>
      </div>
      {menu ? (
        <>
          <div className="javelin-ca-menu-container">
            <div className="javelin-ca-menu-links-container">
              <div className="menu-link-container">
                <a href="/" className="javelin-ca-menu-links">
                  Home
                </a>
              </div>
              <div className="menu-link-container">
                <a href="/" className="javelin-ca-menu-links">
                  Services
                </a>
              </div>
              <div className="menu-link-container">
                <a href="/" className="javelin-ca-menu-links menu-link">
                  Projects
                </a>
              </div>
              <div className="menu-link-container">
                <a href="/" className="javelin-ca-menu-links menu-link">
                  Team
                </a>
              </div>
              <div className="menu-link-container">
                <a href="/" className="javelin-ca-menu-links">
                  Partners
                </a>
              </div>
              <div className="menu-link-container link-container">
                <a href="/" className="javelin-ca-menu-links menu-link">
                  Contacts
                </a>
              </div>
            </div>
            <div>
              <Input
                type="search"
                placeholder="Search here.."
                suffix={<TfiSearch className="nav-menu-search-icon" />}
                // style={{
                //   width: 200,
                // }}
              />
            </div>
          </div>
          <div className="javelim-ca-menu-social-icons-container">
            <div className="javelin-ca-menu-social-icon">
              <FiFacebook />
            </div>
            <div className="javelin-ca-menu-social-icon">
              <FiTwitter />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
