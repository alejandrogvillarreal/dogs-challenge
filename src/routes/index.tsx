import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Breed from "../components/Breed";
import Team from "../components/Team";

// styled components
import { ExternalWrapper, PageContentWrapper } from "./routes.styles";

export default (props: any) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleClickSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <ExternalWrapper
      className={`d-flex ${showSidebar ? `` : `hide`}`}
      id="wrapper"
    >
      <Sidebar />
      <PageContentWrapper id="page-content-wrapper">
        <Navbar handleClickSidebar={handleClickSidebar} />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/breed/:breed_name" component={Breed} />
            <Route path="/team" component={Team} />
            <Redirect from="/" to="/" />
          </Switch>
        </div>
      </PageContentWrapper>
    </ExternalWrapper>
  );
};
