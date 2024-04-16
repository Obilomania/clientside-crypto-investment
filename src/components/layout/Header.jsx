import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/nova-logo.png";


const Header = () => {


  return (
    <Navigation>
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="company--logo" />
        </Link>
      </div>
      <div className="navLinks">
        <NavLink to={"/"} className="">
          HOME
        </NavLink>
        <NavLink to={"/about"} className="">
          ABOUT
        </NavLink>
        <NavLink to={"/faqs"} className="">
          FAQs
        </NavLink>
        <NavLink to={"/contact"} className="">
          CONTACT
        </NavLink>
            {/* <NavLink
              to={"/admin-landing"}
              className=""
              id="login"
            >
              ADMIN
            </NavLink>

            <NavLink
              to={"/dashboard"}
              className=""
              id="login"
            >
              DASHBOARD
            </NavLink>
            <button className="LogOut-btn">
              LOGOUT
            </button> */}
            <NavLink to={"/login"} className="" id="login">
              LOGIN
            </NavLink>
        

            <NavLink to={"/register"} className="" id="login">
              REGISTER
            </NavLink>
      </div>
      <div className="hamburger">
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
  }
  .logo img {
    width: 15rem;
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
    height: 10vh;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    color: white;
    border: 1px solid var(--primary);
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
