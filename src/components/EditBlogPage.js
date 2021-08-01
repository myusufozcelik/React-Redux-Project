import React from "react";
import { connect } from "react-redux";
import { editBlog, removeBlog } from "../actions/blogs";
import BlogForm from "./BlogForm";

const EditBlogPage = (props) => {
  return (
    <div>
      <h1>Edit Page</h1>
      <BlogForm
        blog={props.blog}
        onSubmit={(blog) => {
          props.dispatch(editBlog(props.blog.id, blog));
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeBlog({ id: props.blog.id }));
          props.history.push("/blogs");
        }}
      >Delete</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find((blog) => {
      return blog.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditBlogPage);
