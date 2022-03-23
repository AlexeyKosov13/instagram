import '../styles/cardMenu.scss';
import { ReactComponent as Inbox } from "../img/inbox.svg";
import { ReactComponent as Comments } from "../img/comments.svg";
import { ReactComponent as Notifications } from "../img/notifications.svg";
import { ReactComponent as Bookmark } from "../img/bookmark.svg";


function CardMenu() {
  return (
    <div className='cardMenu'>
      <div className="interactions">
        <Notifications className='icon' />
        <Comments className='icon' />
        <Inbox className='icon' />      
      </div>
      <Bookmark className='icon' />
    </div>
  )
}

export default CardMenu