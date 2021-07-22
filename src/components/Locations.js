import image from '../media/Locations.jpg'
import { Link } from 'react-router-dom';

function Locations() {
    return (
        <div className="Locations">
            <Link to="/buddies">
                <img className="mockup" src={image} alt="buddies"></img>
            </Link>
        </div>
    );
}

export default Locations;