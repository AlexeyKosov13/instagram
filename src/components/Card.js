import Profile from "./Profile";
import "../styles/card.scss";
import { ReactComponent as CardButton } from "../img/cardButton.svg";
import CardMenu from "./CardMenu";
import Comments from "./Comment";

function Card(props) {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;

  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <img src={image} alt="card content" className="cardImage" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber}others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map(comments => {
          return (
            <Comments
              key={comments.key}
              accountName={comments.user}
              comment={comments.text}
            />
          );
        })}
          </div>
          <div className="timePosted">{hours} HOURS AGO</div>
          <div className="addComment">
              <div className="commentText">Add a comment...</div>
              <div className="postText">POST</div>
          </div>
    </div>
  );
}

export default Card;
