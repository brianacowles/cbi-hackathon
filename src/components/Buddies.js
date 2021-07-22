import image from '../media/Buddies.jpg'
import { Link } from 'react-router-dom';

function Buddies() {
    return (
        <div className="Buddies">
            <Link to="/store">
                <img className="mockup" src={image} alt="buddies"></img>
            </Link>
        </div>
    );
}

export default Buddies;