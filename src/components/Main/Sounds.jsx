/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/

import SoundItem from './SoundItem';
import './Sounds.scss';

import Son from '../../assets/quotes/Comme.mp3'
import Sound from '../../assets/quotes/Battre.mp3'

/*===========================================================*/
/*-------------------------- Main ---------------------------*/
/*===========================================================*/
function Sounds(){

    return(
    <section className='sounds'>
        {/* Ici on mettra un map  */}
        <SoundItem data={{sound: Sound, title:"Meilleur citation au monde", author: "Best artiste"}} />
        <SoundItem data={{sound: Son, title:"Other", author: "Plantier"}} />
        <SoundItem data={{sound: Sound, title:"Meilleur citation au monde", author: "Best artiste"}} />
        <SoundItem data={{sound: Sound, title:"Meilleur citation au monde", author: "Best artiste"}} />
        <SoundItem data={{sound: Sound, title:"Meilleur citation au monde", author: "Best artiste"}} />
    </section>)
}

export default Sounds