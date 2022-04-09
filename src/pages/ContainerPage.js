import React,{useState} from 'react'
import NavBar from '../components/NavBar';
import Hamburger from '../components/Hamburger';

const ContainerPage = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }
  

  return (
    <>
        <Hamburger isOpen={isOpen} toggle={toggle}/>
        <NavBar isOpen={isOpen} toggle={toggle}/>
    </>
  )
}

export default ContainerPage