import image from '../media/Login.jpg'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="Login">
            <Link to="/googleLogin">
                <img className="mockup" src={image} alt="buddies"></img>
            </Link>
        </div>
    );
}

export default Login;