import React, { useState } from "react";
import TextArea from "./../../../../components/TextInput/TextArea";
import "./Stories.css";
import Input from "./../../../../components/TextInput/TextInput";
import Button from "./../../../../components/Buttons/Button";
import validator from "validator";
function CreatePost() {
  const [formData, setFormData] = useState({ text: "", image: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          disabled={!formData.text.trim() || !formData.image.trim()}
          // onClick={signIn}
        >
          Create post
        </Button>
      </div>
    </div>
  );
}

export default CreatePost;
