/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/

import SoundItem from './SoundItem';
import './Sounds.scss';

/*===========================================================*/
/*-------------------------- Main ---------------------------*/
/*===========================================================*/
function Sounds(){

    return(
    <section className='sounds'>
        {/* Ici on mettra un map  */}
        <SoundItem />
        <SoundItem />
        <SoundItem />
        <SoundItem />
        <SoundItem />
    </section>)
}

export default Sounds