import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import {Posts} from "../../dummyData";
export default function Feed () {



  let displayPosts =  Posts.map((post,i)=>{
    return <Post post={post} key={i}/>
  })

  return (
    <div className='feed'>
      <div className="feedWrapper">
         <Share/>
         {displayPosts}
      </div>
    </div>
)};


