import image from '../media/Reminders.jpg'
import { Link } from 'react-router-dom';

function Reminders() {
    return (
        <div className="Reminders">
            <Link to="/home">
                <img className="mockup" src={image} alt="buddies"></img>
            </Link>
        </div>
    );
}

export default Reminders;