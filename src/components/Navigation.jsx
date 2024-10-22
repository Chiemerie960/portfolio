import React, { useState } from "react";
import styled from "styled-components";
import NavImage from "../assets/nav-image.jpg";
import { NavLink } from "react-router-dom";
import { AiFillTikTok, AiOutlineHome } from "react-icons/ai";
import { CiMail, CiUser } from "react-icons/ci";
import "./nav.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaRegNewspaper,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoBriefcaseOutline, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Burger className="burger" onClick={toggle}>
        {!open ? <GiHamburgerMenu /> : <IoClose />}
      </Burger>
      <Navbar className={open ? "open" : ""}>
        <div className="nav-image">
          <LazyLoadImage src={NavImage} alt="Emerie" />
          <div className="image-text">CODE BANDIT</div>
        </div>
        <div className="nav-links">
          <div className="nav-link">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <AiOutlineHome />
              Home
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to={"/aboutme"}>
              <CiUser />
              About Me
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to={"/myresume"}>
              <FaRegNewspaper />
              resume
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to={"/portfolio"}>
              <IoBriefcaseOutline />
              Portfolio
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to={"/contactme"}>
              <CiMail />
              Contact
            </NavLink>
          </div>
        </div>
        <div className="nav-footer">
          <div className="socials">
            <FaInstagramSquare />
            <AiFillTikTok />
            <FaTwitterSquare />
            <FaGithubSquare />
            <FaLinkedin />
          </div>
          <p>
            2009 &copy; CodeBandit.
            <br /> All rights reserved.
          </p>
        </div>
      </Navbar>
    </>
  );
};
const Burger = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-secondary);
    width: 40px;
    height: 40px;
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
    z-index: 10;
    svg {
      font-size: 1.5rem;
      color: var(--text-main-color);
    }
  }
`;
const Navbar = styled.div`
  min-width: 200px;
  height: 100vh;
  position: relative;
  background-color: var(--bg-secondary);
  transition: var(--transition);
  .nav-image {
    width: 100%;
    height: 200px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    .image-text {
      display: flex;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: var(--accent-color-transparent);
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 20px;
      font-family: var(--text-heading);
      font-weight: 700;
      line-height: 24px;
      height: 40px;
      color: var(--text-secondary-color);
    }
  }
  .nav-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .nav-link {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      font-size: 20px;
      border-bottom: 1px solid var(--border);
      padding-left: 2rem;
      svg {
        font-size: 1.5rem;
        font-weight: 300;
      }
      a {
        width: 100%;
        color: var(--text-main-color);
        font-family: var(--text-regular);
        font-weight: 400;
        line-height: 45px;
        font-size: 0.85rem;
        text-transform: uppercase;
        text-decoration: none;
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      .active {
        color: var(--text-secondary-color);
        font-weight: 700;
      }
    }
  }
  .nav-footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    position: absolute;
    bottom: 1rem;
    left: 0;
    .socials {
      display: flex;
      gap: 0.8rem;
      svg {
        color: var(--text-main-color);
        font-size: 1.4rem;
        font-weight: 300;
        transition: var(--transition);
        &:hover {
          color: var(--text-secondary-color);
        }
      }
    }
    p {
      font-size: 0.85rem;
      font-family: var(--text-regular);
      font-weight: 400;
      line-height: 24px;
      text-align: center;
      color: var(--text-main-color);
    }
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    z-index: 4;
  }
`;
export default Navigation;
