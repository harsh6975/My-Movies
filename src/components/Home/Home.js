import './Home.css'
import img from '../../Images/Movie1.png'

const Home=()=>{
    return(
        <div className="container">
            <div className="left">
                <h1>Watch Your All</h1>
                <h1>Favourite Movies</h1>
            </div>
            <div className="right">
                <img src={img}></img>
            </div>
        </div>
    );
}
export default Home;