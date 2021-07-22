import image from '../media/Landing.jpg'
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="Landing">
            <Link to="/login">
                <img className="mockup" src={image} alt="buddies"></img>
            </Link>
        </div>
    );
}

export default Landing;