import { MoreVert } from '@mui/icons-material';
import { Users } from "../../dummyData";
import './post.css';

export default function Post ({post}) {

    const user = Users.filter((u) => u.id === post.id)


  return (
    <div className='post'>
         <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={user[0].profilePicture} alt="" className='postProfileImg' />
                    <span className="postUsername">{user[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postRight">
                <MoreVert/>
            </div>
            </div>

            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                    <div className="postBottomLeft">
                        <img  className='likeIcon' src="/assets/like.png" alt="" />
                        <img  className='likeIcon' src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">{post.like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>

            </div>
         </div>
    </div>
)};

