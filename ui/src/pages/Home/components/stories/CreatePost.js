import React, { useState } from "react";
import TextArea from "./../../../../components/TextInput/TextArea";
import "./Stories.css";
import Input from "./../../../../components/TextInput/TextInput";
import Button from "./../../../../components/Buttons/Button";
import validator from "validator";
import { useMutation } from "@apollo/client";
import { createPostMutation } from "../../../../graphql/mutations";
import { NotificationManager } from "react-notifications";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { fetchAllPosts } from "../../../../graphql/queries";

function CreatePost() {
  const [formData, setFormData] = useState({ text: "", image: "" });
  const [createPostHander, { loading }] = useMutation(createPostMutation);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitPost = async () => {
    const { text, image } = formData;
    if (text.trim()) {
      if (validator.isURL(image.trim() || "https://www.random.com")) {
        try {
          const resp = await createPostHander({
            variables: { text, image },
            refetchQueries: [{ query: fetchAllPosts }],
          });
          NotificationManager.success("Post is created !");
          setFormData({ text: "", image: "" });
        } catch (e) {
          NotificationManager.error(e.message);
          setFormData({ text: "", image: "" });
        }
      }
    }
  };
  return (
    <div className="createPost">
      <div className="form">
        <TextArea
          placeholder="Whats on your mind"
          name="text"
          rows="8"
          onChange={handleChange}
          value={formData.text}
        />
        <Input
          placeholder="Post image url"
          name="image"
          onChange={handleChange}
          value={formData.image}
          error={formData.image && !validator.isURL(formData.image)}
        />

        <Button
          type="primary"
          disabled={!formData.text.trim()}
          onClick={submitPost}
        >
          {loading ? "Creating post..." : "Create post"}
        </Button>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default CreatePost;
