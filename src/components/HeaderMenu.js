import Menu from "./Menu"
import { NavLink } from "./style/Button.style"
import React from 'react';
import { NavMenu } from "./style/NavMenu.style"

const HeaderMenu = ({ theme }) => {

    const header = true

    return (
        <>
            <NavMenu>

                <Menu header={header} />
                <NavLink to="/register" bgcolor={theme.colors.yellow} color={theme.colors.white}>Sign Up</NavLink>
                <NavLink to="/login" bgcolor={theme.colors.yellow} color={theme.colors.white}>Log In</NavLink>
            </NavMenu>
        </>
    )
}

export default HeaderMenu