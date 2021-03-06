import React from "react";
import Avatar from "../Avatar/Avatar";
import "./Post.css";
import logo from "../../assets/sideimage.svg";
import { getTags } from "./../../utils/getTags";
import moment from "moment";
function Post({
  avatar,
  name = "Anonymous",
  createdAt,
  content,
  imgSource = "https://source.unsplash.com/random",
  loading = true,
  isLiked,
  totalComments,
  totalLikes,
}) {
  const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam
  veritatis `;

  return (
    <div className="postCard">
      <div className="postHeader">
        <Avatar loading={loading} src={avatar} size="large" />
        <div className="creator">
          <div className={loading ? "loadingText" : "createdBy"}>{name}</div>

          {loading ? null : (
            <div className={"createdAt"}>{moment(+createdAt).calendar()}</div>
          )}
        </div>
      </div>

      {imgSource ? (
        <div className="postImageCtr">
          {loading ? (
            <div className="loadingImage"></div>
          ) : (
            <img
              src={imgSource}
              alt="postImage"
              className="postImage"
              onError={(i) => (i.target.style.display = "none")}
            />
          )}
        </div>
      ) : null}
      <div className="postTextCtr">
        <div className={loading ? "loadingText" : "postText"}>
          {content || text}
        </div>
      </div>
      <div className="postFooter">
        <div className={isLiked ? "likeCtr liked" : "likeCtr"}>
          <div>
            {isLiked ? (
              <i class="fa fa-thumbs-up" aria-hidden="true" />
            ) : (
              <i class="fa fa-thumbs-o-up" aria-hidden="true" />
            )}
            Like {loading ? null : totalLikes ? `(${totalLikes})` : null}
          </div>
        </div>
        <div className="commentCtr">
          <div>
            <i class="fa fa-commenting-o" aria-hidden="true" />
            Comment{" "}
            {loading ? null : totalComments ? `(${totalComments})` : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
