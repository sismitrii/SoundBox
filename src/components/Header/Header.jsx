/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/

import { Link } from "react-router-dom"
import HeaderNav from "./HeaderNav"

import Logo from '../../assets/SoundBoxLogo.png'
import './Header.scss'



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