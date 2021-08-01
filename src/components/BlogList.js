import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";

const BlogList = (props) => {
  return (
    <ul>
      {props.blogs.map((blog) => {
        return <BlogListItem key={blog.id} {...blog} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};
// props içerisine state bilgilerini gönderir
// blogs değerini aşağıdaki ifade ile propsa gönderir

//Higher Order Component
export default connect(mapStateToProps)(BlogList);
// hangi componentte isek sonuna orayı yazarız
