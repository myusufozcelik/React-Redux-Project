import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddBlogPage from "../components/AddBlogPage";
import BlogDetailsPage from "../components/BlogDetailsPage";
import BlogListPage from "../components/BlogListPage";
import ContactPage from "../components/ContactPage";
import EditBlogPage from "../components/EditBlogPage";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/blogs" component={BlogListPage} exact />
          <Route path="/create" component={AddBlogPage} />
          <Route path="/edit/:id" component={EditBlogPage} />
          <Route path="/blogs/:id" component={BlogDetailsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
