import image from '../media/Store.jpg'
import { Link } from 'react-router-dom';

function Store() {
    return (
        <div className="Store">
            <Link to="/home">
                <img className="mockup" src={image} alt="buddies"></img>
            </Link>
        </div>
    );
}

export default Store;