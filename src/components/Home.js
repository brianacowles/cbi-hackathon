import image from '../media/Home.jpg'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <Link to="/locations">
                <img className="mockup" src={image} alt="buddies"></img>
            </Link>
        </div>
    );
}

export default Home;