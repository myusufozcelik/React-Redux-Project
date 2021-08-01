import React from "react";
import { connect } from "react-redux";
import BlogForm from "./BlogForm";
import { addBlog } from "../actions/blogs";

const AddBlogPage = (props) => {
  return (
    <div>
      <h1>Add Blog</h1>
      <BlogForm
        onSubmit={(blog) => {
          props.dispatch(addBlog(blog));
          props.history.push("/blogs"); // bu ifade ile yönlendirme işlemi yapabiliriz
        }}
      />
    </div>
  );
};

export default connect()(AddBlogPage);
