import '../App.css';
import {Fragment, useState} from 'react';
import navbar_photo_profile from '../icon/navbar_photo_profile.svg';

const ChannelHeader = ({current, isVideo}) => {
    const [activeNav, setActiveNav] = useState(true);
    const handleChannel = (status) => {
        current(status);
        (status)? setActiveNav('active') : setActiveNav('');
        
    }

    return (
        <Fragment>
            <div className="channel-header">
                <img src={navbar_photo_profile} alt="foto profil"/>
                <div className="channel-username">
                    <span>Egi Jos</span>
                    <span>15K Subscriber</span>
                </div>
                <div className="button-wrapper">
                    <button className="btn-channel">Edit Channel</button>
                </div>
            </div>
            <ul className="channel-nav">
                <li 
                    onClick={()=>handleChannel(true)}
                    className={activeNav? "active": ""}
                >
                    Video
                </li>
                <li
                    className={activeNav? "":"active"} 
                    onClick={()=>handleChannel(false)}
                >
                    Description
                </li>
            </ul>
        </Fragment>
        
    )
}

export default ChannelHeader;