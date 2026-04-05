import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ TOP LEVEL ONLY

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/create-post",
        formData,
      );

      console.log(res);
      alert("Post created successfully!");

      e.target.reset();

      navigate("/feed"); // ✅ yahan use karo
    } catch (err) {
      console.log(err);
      alert("Error creating post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" required />
        <input type="text" name="caption" required />

        <button type="submit">{loading ? "Uploading..." : "Post"}</button>
      </form>
    </section>
  );
};

export default CreatePost;
