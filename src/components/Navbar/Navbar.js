import React, {useEffect, useState} from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from "../../globalStyles"
import { Nav, NavContainer, NavLogo, NavIcon, MobileIcon, NavMenu , NavLinks, NavItem, NavItemBtn, NavBtnLink} from "./NavStyles"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const onClick = () => {
        setClick(!click)
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton() 
    }, [])

    window.addEventListener("resize", showButton)

    return (
        <>
            <IconContext.Provider value={{color: "#fff"}}>
                <Nav>
                    <NavContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                                ULTRA
                        </NavLogo>
                        <MobileIcon
                            onClick = {onClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={onClick} click={click}>
                            <NavItem >
                                <NavLinks to="/"> Home </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/services"> Services </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/products"> Products </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>Sign Up</Button>
                                    </NavBtnLink>) : (
                                    <NavBtnLink to="/sign-up">
                                        <Button fontBig primary>Sign Up</Button>
                                    </NavBtnLink>
                                    )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavContainer>
                </Nav>       
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
