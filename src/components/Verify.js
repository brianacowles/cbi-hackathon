import image from '../media/Verify.jpg'
import { Link } from 'react-router-dom';

function Verify() {
    return (
        <div className="Verify">
            <Link to="/userForm">
                <img className="mockup" src={image} alt="buddies"></img>
            </Link>
        </div>
    );
}

export default Verify;