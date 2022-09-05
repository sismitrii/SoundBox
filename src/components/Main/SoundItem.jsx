/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/

import {faVolumeHigh } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

import './SoundItem.scss'


/*===========================================================*/
/*-------------------------- Main ---------------------------*/
/*===========================================================*/
function SoundItem(props){
    const [isPlaying, setIsPlaying] = useState(false)
    const {data} = props
    const audio = new Audio(data.sound);

    
    function handlePlay(){
        if (isPlaying === false){
            console.log(audio);
            audio.play();
            setIsPlaying(true);
            setTimeout(()=>{
                setIsPlaying(false);
            },audio.duration * 1000)
        }
    }

    return(
    <article 
        tabIndex="0"
        aria-label={`${data.title} Press enter to play`}
        className={`sound ${isPlaying && 'playing'}`}
        onClick={()=>handlePlay()}
        onKeyDown={(e)=>{
            if (e.key === 'Enter'){
                handlePlay();
            }
        }}
    >
        <div className={`sound__image ${isPlaying && 'playing'}`}>
            <FontAwesomeIcon icon={faVolumeHigh} />
        </div>
        <div className="sound__description">
            <h2>{data.title}</h2>
            <h3>{data.author}</h3>
        </div>
    </article>)
}

export default SoundItem