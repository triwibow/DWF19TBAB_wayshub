import '../App.css';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import Card from '../component/Card';
import PostVideo from '../api/PostVideo';

function Home() {
   return(
        <div className="wrapper">
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className="card-content">
                    {PostVideo.map(item => {                       
                        return <Card key={item.id} data={item} />
                    })}
                </div>
            </div>
        </div>
   )
}

export default Home;