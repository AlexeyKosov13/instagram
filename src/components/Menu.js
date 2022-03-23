import '../styles/Menu.scss';
import { ReactComponent as Home } from '../img/home.svg';
import { ReactComponent as Inbox } from '../img/send.svg';
import {ReactComponent as Explore} from '../img/explore.svg';
import { ReactComponent as Notification } from '../img/heart.svg';
import image from '../img/profile.jpg';
import ProfileIcon from './ProfileIcon';


function Menu() {
    return (
        <div className="menu">
            <Home className="icon" />
            <Inbox className="icon" />
            <Explore className="icon"/>
            <Notification className="icon" />
            <ProfileIcon iconSize = "small" image= {image} storyBorder = {true} />
        </div>
    )
}

export default Menu;