/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/
import SearchBar from '../../components/Main/SearchBar'
import Sounds from '../../components/Main/Sounds'
import './Home.scss'
/*===========================================================*/
/*-------------------------- Main ---------------------------*/
/*===========================================================*/
function Home(){
    return(
    <main className="page-container">
        <SearchBar />
        <Sounds />
    </main>)
}

export default Home