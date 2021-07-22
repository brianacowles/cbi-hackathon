import image from '../media/Connect.jpg'
import { Link } from 'react-router-dom';

function Connect() {
    return (
        <div className="Connect">
            <Link to="/verify">
                <img className="mockup" src={image} alt="connect"></img>
            </Link>
        </div>
    );
}

export default Connect;