/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/

import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import { AppContext } from "../../utils/context"

import Logo from '../../assets/SoundBoxLogo.png'
import './Header.scss'
import HeaderNav from "./HeaderNav/HeaderNav"


/*===========================================================*/
/*--------------------------- Main --------------------------*/
/*===========================================================*/
function Header(){

    return(
        <header>
            <div className="container">
                <Link className="header__logo" to="/">
                    <img src={Logo} alt="Logo de SoundBox" />
                </Link>
                <HeaderNav />
            </div>
        </header>
    )
}

export default Header