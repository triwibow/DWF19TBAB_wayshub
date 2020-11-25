import '../App.css';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import Card from '../component/Card';
import SubscribtionVideo from '../api/SubscribtionVideo';

function Home() {
   return(
        <div className="wrapper">
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className="card-content">
                    {SubscribtionVideo.map(item => {                       
                        return <Card key={item.id} data={item} />
                    })}
                </div>
            </div>
        </div>
   )
}

export default Home;