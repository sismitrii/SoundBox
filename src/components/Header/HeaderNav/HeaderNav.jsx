/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../utils/context'

import './HeaderNav.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
/*===========================================================*/
/*-------------------------- Main ---------------------------*/
/*===========================================================*/
function HeaderNav(){
    const {isMobile} = useContext(AppContext)
    const [isOpen, setIsOpen] = useState(false)

    return(
    <nav>
        {!isMobile ?
            <ul className="nav__list">
                <li className="nav__list__element"><Link to='/'>Home</Link></li>
                <li className="nav__list__element"><Link to='#'>Ajouter un Son</Link></li>
            </ul>
        :
            <>
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
                {isOpen && 
                <ul className='nav__vertical'>
                    <li className='nav__vertical__element'><Link to="/">Home</Link></li>
                    <li className='nav__vertical__element'><Link to="#">Ajouter un son</Link></li>
                </ul>
                }
            </>
            
        }
    </nav>)
}

export default HeaderNav