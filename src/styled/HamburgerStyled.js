import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
// import {SideBarLink as Link} from 'react-router-dom';
import { Link as LinkS } from "react-scroll";

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--background-color);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--text-color);
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideBarWrapper = styled.div`
  color: var(--text-color);
`;
export const SideBarMenu = styled.ul`
  display: grid;
  margin-top: 50px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat (6, 80px);
  }
`;

export const SideBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: var(--text-color);
  cursor: pointer;

  &:hover {
    /* color:#01bf71; */
    transition: all 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  padding-top: 40px;

  a {
    color: var(--text-color);
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 25px;
  }
`;
