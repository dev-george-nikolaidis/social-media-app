import Feed from '../../componets/feed/Feed';
import Rightbar from '../../componets/rightbar/Rightbar';
import Sidebar from '../../componets/sidebar/Sidebar';
import Topbar from '../../componets/topbar/Topbar';
import './home.css';


export default function Home () {

  return (
    <>
      <Topbar/>
       <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
       </div>
    </>
)};


