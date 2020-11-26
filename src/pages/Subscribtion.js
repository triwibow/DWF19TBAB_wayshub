// css
import '../App.css';

// component
import Card from '../component/Card';

// fake data
import SubscribtionVideo from '../api/SubscribtionVideo';

const Subscribtion = () => {
   return(
    <div className="card-content">
        {SubscribtionVideo.map(item => {                       
            return <Card key={item.id} data={item} />
        })}
    </div>
   )
}

export default Subscribtion;