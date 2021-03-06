import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import Post from "../../../../components/Post/Post";
import { fetchAllPosts } from "../../../../graphql/queries";
import CreatePost from "./CreatePost";
import "./Stories.css";
import { NotificationManager } from "react-notifications";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { setStoriesData } from "./../../../../redux/actions/dataActions";
import { useDispatch, useSelector } from "react-redux";
import capitalizeName from "./../../../../utils/CapitalizeName";
function Stories() {
  const { loading, error, data } = useQuery(fetchAllPosts);
  if (error) {
    NotificationManager.error(error.message);
  }

  const dispatch = useDispatch();
  const allStories = useSelector((state) => state.data.allPostsData);
  const userId = useSelector((state) => state.app.userId);
  useEffect(() => {
    if (data) {
      dispatch(setStoriesData(data.posts.slice().reverse()));
    }
  }, [data, loading]);
  return (
    <div className="storiesCtr">
      <CreatePost />
      {allStories.reverse().map((post) => {
        const { text, createdBy, comments, likedBy, image, createdAt } = post;
        const likes = likedBy.map((i) => i._id);
        return (
          <Post
            key={post._id}
            loading={loading}
            content={text}
            name={capitalizeName(createdBy.name)}
            totalComments={comments.length}
            totalLikes={likedBy.length}
            imgSource={image}
            isLiked={likes.includes(userId)}
            createdAt={createdAt}
          />
        );
      })}
      <NotificationContainer />
    </div>
  );
}

export default Stories;
