/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/

import {faVolumeHigh } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import './SoundItem.scss'


/*===========================================================*/
/*-------------------------- Main ---------------------------*/
/*===========================================================*/
function SoundItem(props){
    const {data} = props
    const audio = new Audio(data.sound)

    function handlePlay(){
        audio.currentTime = 0;
        audio.play()
    }

    return(
    <article 
        tabIndex="0"
        aria-label={`${data.title} Press enter to play`}
        className="sound"
        onClick={()=>handlePlay()}
        onKeyDown={(e)=>{
            if (e.key === 'Enter'){
                handlePlay();
            }
        }}
    >
        <div className="sound__image">
            <FontAwesomeIcon icon={faVolumeHigh} />
            
        </div>
        <div className="sound__description">
            <h2>{data.title}</h2>
            <h3>{data.author}</h3>
        </div>
    </article>)
}

export default SoundItem