/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/

import {faVolumeHigh } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import './SoundItem.scss'
import Sound from '../../assets/quotes/Battre.mp3'

/*===========================================================*/
/*-------------------------- Main ---------------------------*/
/*===========================================================*/
function SoundItem(){
    return(
    <article className="sound">
        <div className="sound__image">
            <FontAwesomeIcon icon={faVolumeHigh} />
            
        </div>
        <div className="sound__description">
            <h2>Meilleur citation au monde</h2>
            <h3>Best artiste</h3>
        </div>
        <audio src={Sound}></audio>
    </article>)
}

export default SoundItem