import image from '../media/GoogleLogin.jpg'
import { Link } from 'react-router-dom';

function GoogleLogin() {
    return (
        <div className="GoogleLogin">
            <Link to="/intro">
                <img className="mockup" src={image} alt="buddies"></img>
            </Link>
        </div>
    );
}

export default GoogleLogin;