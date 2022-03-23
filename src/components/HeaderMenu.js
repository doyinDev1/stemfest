import Menu from "./Menu"
import RegistrationModal from "./RegistrationModal";
import { Button, NavLink } from "./style/Button.style"
import React, { useState } from 'react';

import { NavMenu } from "./style/NavMenu.style"

const HeaderMenu = ({ theme }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        console.log("Registration button clicked");
        setShowModal(prev => !prev);
    }

    const header = true

    return (
        <>
            <NavMenu>

                <Menu header={header} />

                {/* <Button to="/register" onClick={() => openModal()} bgcolor={theme.colors.pryStemBlue} color={theme.colors.white}>{theme.btnNav}</Button> */}

                <NavLink to="/register" bgcolor={theme.colors.pryStemBlue} color={theme.colors.white}>REGISTER</NavLink>
                <NavLink to="/login" bgcolor={theme.colors.pryStemYellow} color={theme.colors.white}>LOGIN</NavLink>
            </NavMenu>
            <RegistrationModal showModal={showModal} setShowModal={setShowModal} />

        </>
    )
}

export default HeaderMenu