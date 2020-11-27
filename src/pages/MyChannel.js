import '../App.css';
import {useState} from 'react'
import cover from '../icon/cover.svg';
import ChannelHeader from '../component/channel/ChannelHeader';
import ChannelDescription from '../component/channel/ChannelDescription';
import ChannelVideo from '../component/channel/ChannelVideo';

const MyChannel = () => {
    const [isVideo, setIsVideo] = useState(true);

    const handleChannel = (status) => {
        setIsVideo(status)
    }

    return(
        <div>
            <div className="cover">
                <img src={cover} alt="cover" />
            </div>
            <div className="channel-wrapper">
                <ChannelHeader current={(status) => handleChannel(status)} isVideo={isVideo}/>
                {(isVideo)? 
                    <ChannelVideo />:
                    <ChannelDescription />
                }
            </div>
        </div>
    )
}

export default MyChannel;