import image from '../media/Intro.gif'
import { Link } from 'react-router-dom';

function Intro() {
    return (
        <div className="Intro">
            <Link to="/userForm">
                <img className="mockup" src={image} alt="connect"></img>
            </Link>
        </div>
    );
}

export default Intro;