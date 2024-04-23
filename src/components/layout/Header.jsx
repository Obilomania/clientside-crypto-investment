import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/nova-logo.png";
import { useDispatch, useSelector } from "react-redux";



const activeLink = ({ isActive }) => (isActive ? "activeLink" : "darkLink");



const Header = () => {
  const [navigation, setNavigation] = useState(false);
  const toggleNav = () => setNavigation(!navigation);
  const userInfo = useSelector(state => state.persistedReducer.auth)



  return (
    <Navigation>
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="company--logo" />
        </Link>
      </div>
      <div className={navigation ? "navLinks" : "navClose"}>
        <NavLink to={"/"} className={activeLink} onClick={toggleNav}>
          HOME
        </NavLink>
        <NavLink to={"/about"} className={activeLink} onClick={toggleNav}>
          ABOUT
        </NavLink>
        <NavLink to={"/faqs"} className={activeLink} onClick={toggleNav}>
          FAQs
        </NavLink>
        <NavLink to={"/contact"} className={activeLink} onClick={toggleNav}>
          CONTACT
        </NavLink>
        {userInfo.userRole === "Admin" && (
          <>
            <NavLink
              to={"/admin-landing"}
              className={activeLink}
              id="login"
              onClick={toggleNav}
            >
              ADMIN
            </NavLink>
          </>
        )}

        {userInfo?.currentUser ? (
          <>
            <NavLink
              to={"/dashboard"}
              className={activeLink}
              id="login"
              onClick={toggleNav}
            >
              DASHBOARD
            </NavLink>
            <button className="LogOut-btn">
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <NavLink
              to={"/login"}
              className={activeLink}
              id="login"
              onClick={toggleNav}
            >
              LOGIN
            </NavLink>
            <NavLink
              to={"/register"}
              className={activeLink}
              id="login"
              onClick={toggleNav}
            >
              REGISTER
            </NavLink>
          </>
        )}
      </div>
      <div className="hamburger" onClick={toggleNav}>
        <FiMenu />
      </div>
    </Navigation>
  );
};



const Navigation = styled.div`
  width: 100%;
  padding: 1.5rem 10rem;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--background-color);
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size:.8rem;
  }
  .logo img {
    width: 10rem;
  }
  .navLinks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }
  .navClose {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }
  .darkLink {
    color: white;
  }
  .activeLink {
    color: var(--primary);
  }
  #login,
  .LogOut-btn {
    font-size:.8rem;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem 1rem;
    color: white;
    border: 1px solid var(--primary);
    border-radius:.5rem;
  }
  .hamburger {

    color: white;
    font-size: 1.2rem;
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 1rem;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-color);
    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    .navLinks {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      gap: 2rem;
    }
    .navClose {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      gap: 2rem;
    }
    .darkLink {
      color: white;
    }
    .activeLink {
      color: var(--primary);
    }
    #login {
      height: 10vh;
      background: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 2rem;
    }
    .hamburger {
      color: white;
      font-size: 1.2rem;
      display: none;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 1rem;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-color);
    .logo img {
      width: 10rem;
    }
    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    .navLinks {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      gap: 2rem;
    }
    .navClose {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      gap: 2rem;
    }
    .darkLink {
      color: white;
    }
    .activeLink {
      color: var(--primary);
    }
    #login {
      height: 10vh;
      background: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
    }
    .hamburger {
      color: white;
      font-size: 1.2rem;
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1.5rem 1rem;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    .logo img {
      width: 10rem;
    }
    .navLinks {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 3rem;
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      padding: 6rem 0;
      transition: var(--transition);
    }
    .navClose {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 5rem;
      position: absolute;
      top: 5vh;
      left: -100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      padding: 2rem 0;
      transition: var(--transition);
    }
    .darkLink {
      color: white;
    }
    .activeLink {
      color: var(--primary);
    }
    #login {
      height: fit-content;
      background: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 3rem;
    }
    .hamburger {
      color: white;
      font-size: 1.5rem;
      display: flex;
      cursor: pointer;
      z-index: 30;
    }
    .logo {
      z-index: 30;
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    padding: 1.5rem 1rem;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    .navLinks {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 3rem;
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      padding: 6rem 0;
      transition: var(--transition);
    }
    .navClose {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 5rem;
      position: absolute;
      top: 0;
      left: -100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      padding: 5rem 0;
      transition: var(--transition);
    }
    .darkLink {
      color: white;
    }
    .activeLink {
      color: var(--primary);
    }
    #login {
      height: fit-content;
      background: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 3rem;
    }
    .hamburger {
      color: white;
      font-size: 1.5rem;
      display: flex;
      cursor: pointer;
      z-index: 30;
    }
    .logo {
      z-index: 30;
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    padding: 1.5rem 1rem;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    .navLinks {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 2rem;
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      padding: 2rem 0;
      transition: var(--transition);
    }
    .navClose {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 3rem;
      position: absolute;
      top: 0;
      left: -100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      padding: 5rem 0;
      transition: var(--transition);
    }
    .darkLink {
      color: white;
    }
    .activeLink {
      color: var(--primary);
    }
    #login {
      height: fit-content;
      background: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 3rem;
    }
    .hamburger {
      color: white;
      font-size: 1.5rem;
      display: flex;
      cursor: pointer;
      z-index: 30;
    }
    .logo {
      z-index: 30;
    }
  }
`;
export default Header;
