/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/

import { Link } from "react-router-dom"

/*===========================================================*/
/*--------------------------- Main --------------------------*/
/*===========================================================*/
function Header(){
    return(
        <header>
            <div className="container">
                <Link to="/"><img src="#" alt="Logo de SoundBox" /></Link>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='#'>Ajouter un Son</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header