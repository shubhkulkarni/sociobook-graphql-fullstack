import React from "react";
import Avatar from "../Avatar/Avatar";
import "./Post.css";
import logo from "../../assets/sideimage.svg";
import { getTags } from "./../../utils/getTags";
function Post({
  avatar,
  name = "Anonymous",
  createdAt = "3h ago",
  content,
  imgSource = "https://source.unsplash.com/random",
}) {
  const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam
  veritatis omnis eius mollitia, #tempore distinctio totam explicabo
  adipisci temporibus debitis accusamus error dignissimos, sapiente quo
  qui exercitationem #aliquid illum.`;
  return (
    <div className="postCard">
      <div className="postHeader">
        <Avatar src={avatar} size="large" />
        <div className="creator">
          <div className="createdBy">{name}</div>
          <div className="createdAt">{createdAt}</div>
        </div>
      </div>
      {imgSource ? (
        <div className="postImageCtr">
          <img src={imgSource} alt="postImage" className="postImage" />
        </div>
      ) : null}
      <div className="postTextCtr">
        <div className="postText">{text}</div>
      </div>
      <div className="postFooter">
        <div className="likeCtr">
          <div>
            <i class="fa fa-thumbs-o-up" aria-hidden="true" />
            Like (1203)
          </div>
        </div>
        <div className="commentCtr">
          <div>
            <i class="fa fa-commenting-o" aria-hidden="true" />
            Comment (399)
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
