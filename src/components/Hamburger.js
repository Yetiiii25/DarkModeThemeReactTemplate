import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap } from '../styled/HamburgerStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Hamburger = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/">
                        Home
                    </SideBarLink>
                        <SideBarLink to="/about">
                            About
                        </SideBarLink>
                            <SideBarLink to="/experience">
                                Experience
                            </SideBarLink>
                                <SideBarLink to="/portfolio">
                                    Portfolio
                                </SideBarLink>
                    <SideBtnWrap>
                        <a href="mailto:flores.d@sscrmnl.edu.ph" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /> </a>
                        <a href="https://www.linkedin.com/in/deinenflores/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /> </a>
                        <a href="https://github.com/Yetiiii25" target="_blank" rel="noreferrer">    <FontAwesomeIcon icon={faGithub} /> </a>
                    </SideBtnWrap>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default Hamburger