import React from 'react'
import { Nav, NavLink, MobileIcon, NavMenu, NavBtn, NavLogo } from '../styled/NavbarStyled'
import { FaBars } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import DarkMode from "../components/DarkMode";

const NavBar = ({ toggle }) => {

  //about 
  //experience
  //portfolio



  return (
    <>
      <Nav>
        <NavLogo to="/">
          <DarkMode />
          Home
        </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
            <NavMenu>
              <NavLink to="/portfolio">
                Portfolio
              </NavLink>
                <NavLink to="/about">
                  About Me
                </NavLink>
                  <NavLink to="/experience">
                    Experience
                  </NavLink>
            </NavMenu>
              <NavBtn>
                <a href="mailto:flores.d@sscrmnl.edu.ph" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /> </a>
                <a href="https://www.linkedin.com/in/deinenflores/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /> </a>
                <a href="https://github.com/Yetiiii25" target="_blank" rel="noreferrer">    <FontAwesomeIcon icon={faGithub} /> </a>
              </NavBtn>
      </Nav>
    </>
  )
}

export default NavBar