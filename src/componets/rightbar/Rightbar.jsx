import './rightbar.css';


export default function Rightbar () {

  return (
    <div className='rightbar'>
         <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="/assets/gift.png" alt=""  className='birthdayImg'/>
            <span className="birthdayText"> <b> Jim </b>and <b>  2 other friends </b> have a birthday today.</span>
          </div>
          <img className='rightbarAd' src="/assets/ad.png" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
             <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
                <span className="rightbarUsername">John Doe</span>
              </div>
             </li>
             <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
                <span className="rightbarUsername">John Doe</span>
              </div>
             </li>
             <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
                <span className="rightbarUsername">John Doe</span>
              </div>
             </li>
             <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
                <span className="rightbarUsername">John Doe</span>
              </div>
             </li>
             <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
                <span className="rightbarUsername">John Doe</span>
              </div>
             </li>
          </ul>
         </div>
    </div>
)};


