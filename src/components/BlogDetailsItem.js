import React from "react";

const BlogDetailsItem = ({ id, title, description }) => {
  return (
    <div>
      <p>blog id: {id}</p>
      <p>title: {title}</p>
      <p>description: {description}</p>
    </div>
  );
};

export default BlogDetailsItem;
