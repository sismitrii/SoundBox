/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { AppContext } from '../../utils/context';
import './SearchBar.scss'
/*===========================================================*/
/*--------------------------- Main --------------------------*/
/*===========================================================*/
function SearchBar(){
    const {isMobile} = useContext(AppContext)
    return(
    <form>
        <input 
            type="text" 
            role="search"
            aria-label='Recherchez un son'
            placeholder='Recherchez un son'>    
        </input>
        {!isMobile && <span>Enter</span>}
        <button type='submit'>
            <FontAwesomeIcon icon={faSearch} aria-label="icon de recherche" />
        </button>
    </form>)
}

export default SearchBar;