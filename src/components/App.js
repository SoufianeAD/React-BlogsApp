import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import BlogsList from "./blogs/BlogsList";
import BlogCreate from "./blogs/BlogCreate";
import BlogShow from "./blogs/BlogShow";
import BlogDelete from "./blogs/BlogDelete";

const App = () => {
    return (
        <div className="ui container" style={{padding: '60px'}}>
            <BrowserRouter>
                <Route path="/" exact component={BlogsList} />
                <Route path="/blogs/new" exact component={BlogCreate} />
                <Route path="/blogs/show/:id" exact component={BlogShow} />
                <Route path="/blogs/delete/:id" exact component={BlogDelete} />
            </BrowserRouter>
        </div>
    );
}
export default App;