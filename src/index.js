import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import configureStore from "./store/configureStore";
import { addBlog, editBlog, removeBlog } from "./actions/blogs";
import { Provider } from "react-redux";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

const blog1 = store.dispatch(
  addBlog({ title: "blog title 1", description: "blog description 1" })
);
const blog2 = store.dispatch(
  addBlog({
    title: "blog title 2",
    description: "blog description 2",
    dateAdded: Date.now(),
  })
);

store.dispatch(removeBlog({ id: blog1.blog.id }));
store.dispatch(
  editBlog(blog2.blog.id, {
    title: "updated blog title",
    description: "updated blog description",
  })
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
