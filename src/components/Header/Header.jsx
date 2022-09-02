/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/

import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import { AppContext } from "../../utils/context"

import Logo from '../../assets/SoundBoxLogo.png'
import './Header.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

/*===========================================================*/
/*--------------------------- Main --------------------------*/
/*===========================================================*/
function Header(){
    const {isMobile} = useContext(AppContext)
    const [isOpen, setIsOpen] = useState(false)
    return(
        <header>
            <div className="container">
                <Link className="header__logo" to="/">
                    <img src={Logo} alt="Logo de SoundBox" />
                </Link>
                <nav>
                {!isMobile ?
                    <ul className="nav__list">
                        <li className="nav__list__element"><Link to='/'>Home</Link></li>
                        <li className="nav__list__element"><Link to='#'>Ajouter un Son</Link></li>
                    </ul>
                :
                    <FontAwesomeIcon
                        className="nav__bars" 
                        tabIndex="0"
                        icon={faBars} 
                        onClick={()=>setIsOpen(!isOpen)}
                        onKeyDown={(e)=>{
                            if(e.key === 'Enter' || e.key === ' '){
                              e.preventDefault(); // cancel scroll down on space
                              setIsOpen(!isOpen)
                            }}}
                    />
                }
                </nav>
            </div>
        </header>
    )
}

export default Header