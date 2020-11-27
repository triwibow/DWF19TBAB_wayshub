// css
import '../App.css';

// component
import Card from '../component/card/Card';

// fake data
import PostVideo from '../api/PostVideo';

const Home = () => {
   return(
        <div className="card-content">
            {PostVideo.map(item => {                       
                return <Card key={item.id} data={item} />
            })}
        </div>
   )
}

export default Home;