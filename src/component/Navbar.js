import {Link} from 'react-router-dom';
import '../App.css';
import add_video_icon from '../icon/add_video_icon.svg';
import navbar_photo_profile from '../icon/navbar_photo_profile.svg';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="search-bar">
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-menu-list">
                    <li className="navbar-menu-item">
                        <Link to='' className="navbar-menu-link link">
                            <img src={add_video_icon} alt="add_video_icon"/>
                            <span>Add Video</span>
                        </Link>
                    </li>

                    <li className="navbar-menu-item">
                        <button className="navbar-menu-button">
                            <img src={navbar_photo_profile} alt="add_video_icon"/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;