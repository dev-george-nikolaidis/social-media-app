import { MoreVert } from '@mui/icons-material';
import './post.css';


export default function Post () {

  return (
    <div className='post'>
         <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className='postProfileImg' />
                    <span className="postUsername">Geo Nik</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postRight">
                <MoreVert/>
            </div>
            </div>

            <div className="postCenter">
                <span className="postText">Lorem ipsum dolor sit amet.</span>
                <img className='postImg' src="/assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                    <div className="postBottomLeft">
                        <img  className='likeIcon' src="/assets/like.png" alt="" />
                        <img  className='likeIcon' src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">45 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>

            </div>
         </div>
    </div>
)};


