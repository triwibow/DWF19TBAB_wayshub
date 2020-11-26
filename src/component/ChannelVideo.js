import '../App.css';
import Card from './Card';

import PostVideo from '../api/PostVideo';

const ChannelVideo = () => {
    return(
        <div className="channel-card">
            {PostVideo.map(item => {                       
                return <Card key={item.id} data={item} />
            })}
        </div>
    )
}

export default ChannelVideo;