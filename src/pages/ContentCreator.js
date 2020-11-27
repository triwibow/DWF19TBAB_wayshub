import '../App.css';

import ChannelVideo from '../component/channel/ChannelVideo';

import cover from '../icon/cover.svg';
import navbar_photo_profile from '../icon/navbar_photo_profile.svg';

const ContentCreator = () => {
    return(
        <div>
            <div className="cover">
                <img src={cover} alt="cover" />
            </div>
            <div className="channel-wrapper">
                <div className="channel-header border-bottom">
                    <img src={navbar_photo_profile} alt="foto profil"/>
                    <div className="channel-username">
                        <span>Egi Jos</span>
                        <span>15K Subscriber</span>
                    </div>
                    <div className="button-wrapper">
                        <button className="btn-channel">Subscribe</button>
                    </div>
                </div>
                <ChannelVideo />
            </div>
        </div>
    )
}

export default ContentCreator;