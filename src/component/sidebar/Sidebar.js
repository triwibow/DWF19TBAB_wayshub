import './sidebar.css';
import {Link} from 'react-router-dom';
import Icon from '../../icon/icon.svg';
import home_icon from '../../icon/home_icon.svg';
import subscription_icon from '../../icon/subscription_icon.svg';
import user_channel_icon from '../../icon/user_channel_icon.svg';


const Sidebar = () => {
    return(
        <div className="sidebar">
            <img src={Icon} alt="icon" className="sidebar-logo"/>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <Link to="/" className="sidebar-link">
                        <img src={home_icon} alt="home_icon" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/subscribtion" className="sidebar-link">
                        <img src={subscription_icon} alt="subscription_icon" />
                        <span>Subscribtion</span>
                    </Link>
                </li>
            </ul>

            <h1 className="sidebar-list-title">Channel</h1>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <Link to="/subscription" className="sidebar-link">
                        <img src={user_channel_icon} alt="user_channel_icon" className="sidebar-photo-profile" />
                        <span className="sidebar-username">Sab</span>
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/subscription" className="sidebar-link">
                        <img src={user_channel_icon} alt="user_channel_icon" className="sidebar-photo-profile" />
                        <span className="sidebar-username">BBQ Montain Bossksdalsdkaldk</span>
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/subscription" className="sidebar-link">
                        <img src={user_channel_icon} alt="user_channel_icon" className="sidebar-photo-profile" />
                        <span className="sidebar-username">Egi Jos</span>
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/subscription" className="sidebar-link">
                        <img src={user_channel_icon} alt="user_channel_icon" className="sidebar-photo-profile" />
                        <span className="sidebar-username">Tahu Coding</span>
                    </Link>
                </li>
            </ul>

            <button className="show-more">Show More</button>
        </div>
    )
}

export default Sidebar;