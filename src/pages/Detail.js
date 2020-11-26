// css
import '../App.css';

// component
import Video from '../component/Video';
import Card from '../component/Card';
import PostVideo from '../api/PostVideo';

const Detail = () => {
    return(
        <div className="video-container">
            <Video/>
            <div className="recomendation-video">
                {PostVideo.map(item => {                       
                    return <Card key={item.id} data={item} />
                })}
            </div>
        </div>
   )
}

export default Detail;