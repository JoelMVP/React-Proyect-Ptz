import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import Layout from "../components/layout";
import NotFound from "../components/NotFound";
import principal from "./principal";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/" component={principal} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
