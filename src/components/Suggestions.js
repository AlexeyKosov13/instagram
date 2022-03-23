import Profile from "./Profile";
import "../styles/suggestions.scss";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions for You</div>
        <a href="/">See All</a>
      </div>

      <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by dadatlack + 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
    </div>
  );
}

export default Suggestions;
